import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobPost } from './jobpost.schema';
import { CreateJobPostDto} from './createJob.dto';

@Injectable()
export class JobPostService {
  constructor(@InjectModel('JobPost') private readonly jobPostModel: Model<JobPost>) {}

  async createJob(createJobPostDto:  CreateJobPostDto): Promise<JobPost> {
    const createdJob = await this.jobPostModel.create(createJobPostDto);
    return createdJob.save();
  }
}
