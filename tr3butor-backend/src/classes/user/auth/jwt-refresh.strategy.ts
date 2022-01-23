import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserDocument } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


export type JwtRefreshPayload = {
  sub: string;
  refresh_token_uid: string;
}

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      ignoreExpiration: false,
      secretOrKey: process.env.REFRESH_TOKEN_SECRET,
    });
  }

  async validate(payload: JwtRefreshPayload): Promise<string> {
    const user = await this.userModel.findById(payload.sub).exec();
    if(user) {
      if(user.refresh_token_uid == payload.refresh_token_uid) {
        return payload.sub;
      }
    }
    throw new UnauthorizedException();
  }
}
