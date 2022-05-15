import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SignupService } from './signup.service';
import { User } from './signup.model';

@Controller('api/user')
export class SignupController {
  constructor(private readonly appService: SignupService) {}

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }

  @Get()
  readUser() {
    return this.appService.readUser();
  }

  @Put()
  async updateUser(
    @Param('id') id: string,
    @Body() userDto: User,
  ): Promise<User> {
    return this.appService.updateUser(id, userDto);
  }

  @Delete()
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
