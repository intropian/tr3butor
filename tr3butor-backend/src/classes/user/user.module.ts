import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule , JwtService} from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule.register({
    signOptions: {
        expiresIn: process.env.EXPIRESIN,
    },
    secretOrPrivateKey: process.env.SECRETKEY,
  })],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
