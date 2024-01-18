import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  getUsers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    ){
    return `user limit is: ${limit} and offset is: ${offset}`;
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string){
    return `user ${userId}`;
  }


}
