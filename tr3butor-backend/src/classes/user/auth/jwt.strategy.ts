import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

export type AuthUser = {
  userId: string;
  public_addr: string;
}
export type JwtPayload = {
  sub: string;
  public_addr: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRETKEY,
    });
  }

  validate(payload: JwtPayload): AuthUser {
    // TODO we can add more verification here and load user from DB (and verify public_addr matches user loaded by ID)
    return { userId: payload.sub, public_addr: payload.public_addr };
  }
}
