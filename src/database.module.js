// database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sharmatha:123@cluster0.fbajy5t.mongodb.net/?retryWrites=true&w=majority'),
  ],
})
export class DatabaseModule {}
