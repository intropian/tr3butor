import type {AuthUser} from './auth/jwt.strategy';

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthRequestDto, AuthResponseDto, AuthConfirmDto } from './dto/auth.dto';
import { JWTDto } from './dto/jwt.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

  @Post('auth-request')
  @ApiOperation({ summary: 'Auth Request' })
  @ApiOkResponse({
    description: 'requesting start of authentication from BE, getting nonce for further signing',
    type: AuthRequestDto,
  })
  authRequest(@Body() authRequestDto: AuthRequestDto): Promise<AuthResponseDto> {
    return this.authService.authRequest(authRequestDto);
  }
  @Post('auth-confirm')
  @ApiOperation({ summary: 'Auth Confirm' })
  @ApiOkResponse({
    description: 'FE provides signed nonce and BE validates it and authenticates user',
    type: AuthConfirmDto,
  })
  authConfirm(@Body() authConfirmDto: AuthConfirmDto): Promise<JWTDto> {
    return this.authService.authConfirm(authConfirmDto);
  }

  /*
  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  */

  @Get()
  @ApiOkResponse({
    description: 'List of Users',
    type: [User],
  })
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiOkResponse({
    description: 'Profile of current user',
    type: User
  })
  getMyProfile(@Req() request:Request) {
    const authUser = <AuthUser>request.user;
    return this.userService.findOne(authUser.userId);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The found blog article',
    type: User,
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

}
