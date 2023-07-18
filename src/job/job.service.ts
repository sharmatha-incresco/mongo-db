import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from './job.schema';
import { CreateUserDto } from './createUser.dto';

@Injectable()
export class JobService {
  constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) {}

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

  async createJob(createJobDto: CreateUserDto): Promise<Job> {


    const createdJob = await this.jobModel.create(createJobDto);
    return createdJob.save();
  }
}
