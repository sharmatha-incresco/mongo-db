// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { jobModule } from './job/job.module';
//import { OpenSearchService } from './openSearch.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sharmatha:123@cluster0.fbajy5t.mongodb.net/jobs?retryWrites=true&w=majority'),
    jobModule, // Add your module here
  ],
})
export class AppModule {}
