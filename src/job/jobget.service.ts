import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobGet } from './jobget.schema';

@Injectable()
export class JobGetService {
  constructor(@InjectModel('JobGet') private readonly jobGetModel: Model<JobGet>) {}

  async findAll(): Promise<JobGet[]> {
    return this.jobGetModel.find().exec();
  }

  async findByPosition(position: string): Promise<JobGet[]> {
    return this.jobGetModel.find({ position }).exec();
  }

  async findByCompany(company: string): Promise<JobGet[]> {
    return this.jobGetModel.find({ company }).exec();
  }

  async findByLocation(location: string): Promise<JobGet[]> {
    return this.jobGetModel.find({ location }).exec();
  }

  async findByDate(date: string): Promise<JobGet[]> {
    return this.jobGetModel.find({ date }).exec();
  }

  async findBySkills(skills: string[]): Promise<JobGet[]> {
    return this.jobGetModel.find({ skills: { $in: skills } }).exec();
  }

  async findByExperience(experience: string): Promise<JobGet[]> {
    return this.jobGetModel.find({ experience }).exec();
  }

  async findByEducation(education: string): Promise<JobGet[]> {
    return this.jobGetModel.find({ education }).exec();
  }

  async incrementApplicantsCount(jobId: string): Promise<JobGet> {
    const job = await this.jobGetModel.findById(jobId).exec();
    job.applicantsCount += 1;
    return job.save();
  }
}