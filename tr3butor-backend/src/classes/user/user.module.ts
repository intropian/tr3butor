import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule , JwtService} from '@nestjs/jwt';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule.register({
    signOptions: {
        expiresIn: process.env.EXPIRES_IN,
    },
    secret: process.env.SECRETKEY,
  })],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
