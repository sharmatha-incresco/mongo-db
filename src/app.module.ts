import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobGetSchema } from './job/jobget.schema';
import { JobPostSchema } from './job/jobpost.schema';
import { JobGetController } from './job/jobget.controller';
import { JobPostController } from './job/jobpost.controller';
import { JobGetService } from './job/jobget.service';
import { JobPostService } from './job/jobpost.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sharmatha:123@cluster0.fbajy5t.mongodb.net/jobget'),
    MongooseModule.forRoot('mongodb+srv://sharmatha:123@cluster0.fbajy5t.mongodb.net/jobpost'),
    MongooseModule.forFeature([{ name: 'JobGet', schema: JobGetSchema }]),
    MongooseModule.forFeature([{ name: 'JobPost', schema: JobPostSchema }]),
  ],
  controllers: [JobGetController, JobPostController,AuthController],
  providers: [JobGetService, JobPostService,AuthService],
})
export class AppModule {}
