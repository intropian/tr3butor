import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthRequestDto, AuthResponseDto, AuthConfirmDto } from './dto/auth.dto';
import { JWTDto } from './dto/jwt.dto';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { randomUUID } from 'crypto';
import ethUtil  from 'ethereumjs-util';
import  {JwtService} from '@nestjs/jwt';

function verifySignature(signed_nonce: string, nonce: string, public_addr: string): boolean {
  const msgBuffer = ethUtil.toBuffer(nonce);
  const msgHash = ethUtil.hashPersonalMessage(msgBuffer);
  const signatureBuffer = ethUtil.toBuffer(signed_nonce);
  const signatureParams = ethUtil.fromRpcSig(signatureBuffer.toString()); // https://gist.github.com/alexanderattar/29bef134239d5760b8d1fcc310b632be
  const publicKey = ethUtil.ecrecover(
    msgHash,
    signatureParams.v,
    signatureParams.r,
    signatureParams.s
  );
  const addressBuffer = ethUtil.publicToAddress(publicKey);
  const address = ethUtil.bufferToHex(addressBuffer);

  // The signature verification is successful if the address found with
  // ecrecover matches the initial publicAddress
  return (address.toLowerCase() === public_addr.toLowerCase()) ;
}

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService, @InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createDto: CreateUserDto):  Promise<User> {
    const createdUser = new this.userModel(createDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findOne({_id:id}).exec();
  }

  async update(id: number, updateDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateDto).exec();
  }

  async remove(id: number): Promise<UpdateWriteOpResult> {
    return this.userModel.find({ _id:id }).remove().exec()
  }
  async authRequest(request: AuthRequestDto): Promise<AuthResponseDto> {
    const {public_addr} = request;
    if(public_addr != null) {
      let user = await this.userModel.findOne({public_addr}).exec();
      if(!user) {
        user = new this.userModel({public_addr});
      }
      user.nonce = randomUUID()
      user.save();
      const response = new AuthResponseDto;
      response.nonce = user.nonce;
      return response;

    } else {
      throw new NotFoundException('empty "public_addr"');
    }
  }

  async authConfirm({public_addr, signed_nonce}: AuthConfirmDto): Promise<JWTDto>{
    if(public_addr != null && signed_nonce != null) {
      const user = await this.userModel.findOne({public_addr}).exec();
      if(user) {
        const nonce = user.nonce;
        if(verifySignature(signed_nonce, nonce, public_addr)) {
          const accessToken = this.jwtService.sign({public_addr});
          return {
              expiresIn: process.env.EXPIRESIN,
              accessToken,
          };
        } else {
          throw new HttpException('Wrong auth', 401);
        }
      } else {
        throw new HttpException('Wrong public_key', 500);
      }
    } else {
      throw new NotFoundException('empty "public_key" or "signed_nonce"');
    }
  }
}

// https://www.codemag.com/Article/2001081/Nest.js-Step-by-Step-Part-3-Users-and-Authentication
