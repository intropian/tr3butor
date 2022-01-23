import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { FavouritesService } from './favourites.service';
import { DaoModule } from '../dao/dao.module';
import { UserController } from './user.controller';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtRefreshStrategy } from './auth/jwt-refresh.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      signOptions: {
          expiresIn: process.env.EXPIRES_IN,
      },
      secret: process.env.SECRETKEY,
    }),
    DaoModule
  ],
  controllers: [UserController],
  providers: [UserService, AuthService, JwtStrategy, JwtRefreshStrategy, FavouritesService],
  exports: [AuthService],
})
export class UserModule {}
