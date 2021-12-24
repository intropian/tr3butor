import type {JwtPayload} from './auth/jwt.strategy';

import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthRequestDto, AuthResponseDto, AuthConfirmDto } from './dto/auth.dto';
import { JWTDto } from './dto/jwt.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
//import { randomUUID } from 'crypto';
import { v4 as randomUUID } from 'uuid';
import * as ethUtil  from 'ethereumjs-util';
import  { JwtService } from '@nestjs/jwt';

function verifySignature(signed_nonce: string, nonce: string, public_addr: string): boolean {
  const msgBuffer = Buffer.from(nonce);
  const msgHash = ethUtil.hashPersonalMessage(msgBuffer);
  const signatureParams = ethUtil.fromRpcSig(signed_nonce); // https://gist.github.com/alexanderattar/29bef134239d5760b8d1fcc310b632be
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
export class AuthService {
  constructor(private readonly jwtService: JwtService, @InjectModel(User.name) private userModel: Model<UserDocument>) {}


  async authRequest(request: AuthRequestDto): Promise<AuthResponseDto> {
    const {public_addr} = request;
    if(public_addr != null) {
      let user = await this.userModel.findOne({public_addr}).exec(); // TODO delegate this to user.service
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
        if(verifySignature(signed_nonce, user.nonce, public_addr)) {
          const jwtPayload: JwtPayload = {public_addr, sub: user._id};
          const accessToken = this.jwtService.sign(jwtPayload);
          return {
              expiresIn: process.env.EXPIRES_IN,
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
