// cats/cats.service.ts
import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from './job.schema';

@Injectable()
export class jobService {
  constructor(@InjectModel('job') private jobModel: Model<Job>) {}

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }

  async findByPosition(position: string): Promise<Job[]> {
    return this.jobModel.find({ position }).exec();
  }

  async findByCompany(company: string): Promise<Job[]> {
    return this.jobModel.find({ company }).exec();
  }

  async findByLocation(location: string): Promise<Job[]> {
    return this.jobModel.find({ location }).exec();
  }

  async findByDate(date: string): Promise<Job[]> {
    return this.jobModel.find({ date }).exec();
  }
}
  // async findAll(): Promise<Job[]> {
  //   console.log("llll");
    
  //   const queryOptions = { maxTimeMS: 20000 }; // Increase the timeout to 15 seconds
    
  //   console.log(await this.jobModel.find().setOptions(queryOptions).exec());
    
  //   return await this.jobModel.find().setOptions(queryOptions).exec();
  //}

