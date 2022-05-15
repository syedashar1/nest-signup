import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [
    SignupModule,
    MongooseModule.forRoot(
      'mongodb+srv://ashar1:ashar1@cluster0.ybb8j.mongodb.net/nest_signup?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
