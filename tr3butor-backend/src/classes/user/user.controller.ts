import type {AuthUser} from './auth/jwt.strategy';

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { FavouritesService } from './favourites.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthRequestDto, AuthResponseDto, AuthConfirmDto } from './dto/auth.dto';
import { JWTDto } from './dto/jwt.dto';
import { AddFavouritesDto, RemoveFavouritesDto} from './dto/favourites.dto';
import { User } from './entities/user.entity';
import { Dao } from '../dao/entities/dao.entity';
import { JwtAuthGuard, JwtRefreshAuthGuard } from './auth/jwt-auth.guard';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly favouritesService: FavouritesService)
  {}

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
    type: JWTDto,
  })
  authConfirm(@Body() authConfirmDto: AuthConfirmDto): Promise<JWTDto> {
    return this.authService.authConfirm(authConfirmDto);
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Post('auth-refresh')
  @ApiOperation({ summary: 'Auth Refresh' })
  @ApiOkResponse({
    description: 'FE provides refresh token and BE returns new access token',
    type: JWTDto
  })
  authRefresh(@Req() request: Request): Promise<JWTDto> {
    const user_id = <string>request.user;
    return this.authService.authRefresh(user_id);
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

  @UseGuards(JwtAuthGuard)
  @Post('add-favourites')
  @ApiOperation({ summary: 'Add favourite DAOs'})
  @ApiOkResponse({
    description: 'FE provides list of DAO ids to add to favourites and BE returns true or error',
    type: Boolean,
  })
  AddFavourites(@Req() request:Request, @Body() addFavouriteDaosDto: AddFavouritesDto): Promise<boolean> {
    const authUser = <AuthUser>request.user;
    return this.favouritesService.add(authUser.userId, addFavouriteDaosDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('remove-favourites')
  @ApiOperation({ summary: 'Remove favourite DAOs'})
  @ApiOkResponse({
    description: 'FE provides list of DAO ids to remove from favourites and BE returns true or error',
    type: Boolean,
  })
  RemoveFavourites(@Req() request:Request, @Body() removeFavouriteDaosDto: RemoveFavouritesDto): Promise<boolean> {
    const authUser = <AuthUser>request.user;
    return this.favouritesService.remove(authUser.userId, removeFavouriteDaosDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('favourites')
  @ApiOperation({ summary: 'Get favourite DAOs'})
  @ApiOkResponse({
    description: 'Gets list of favourite Daos',
    type: [Dao],
  })
  Favourites(@Req() request:Request) {
    const authUser = <AuthUser>request.user;
    return this.favouritesService.get(authUser.userId);
  }

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
