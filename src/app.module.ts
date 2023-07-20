import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobGetSchema } from './job/jobget.schema';
import { JobPostSchema } from './job/jobpost.schema';
import { JobGetController } from './job/jobget.controller';
import { JobPostController } from './job/jobpost.controller';
import { JobGetService } from './job/jobget.service';
import { JobPostService } from './job/jobpost.service';
import { AuthModule } from './auth/auth.module';// Replace 'path/to/auth.module' with the actual path to your auth.module.ts file

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sharmatha:123@cluster0.fbajy5t.mongodb.net/jobget'),
    MongooseModule.forRoot('mongodb+srv://sharmatha:123@cluster0.fbajy5t.mongodb.net/jobpost'),
    MongooseModule.forFeature([{ name: 'JobGet', schema: JobGetSchema }]),
    MongooseModule.forFeature([{ name: 'JobPost', schema: JobPostSchema }]),
    AuthModule, // Add the AuthModule to the imports array
  ],
  controllers: [JobGetController, JobPostController],
  providers: [JobGetService, JobPostService],
})
export class AppModule {}
