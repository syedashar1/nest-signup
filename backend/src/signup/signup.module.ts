import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupController } from './signup.controller';
import { UserSchema } from './signup.model';
import { SignupService } from './signup.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
