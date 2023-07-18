import { Schema, Document, model } from 'mongoose';

export const JobPostSchema = new Schema({
  name: { type: String },
  email: { type: String },
  about: { type: String },
  experience: { type: String },
  language: { type: String },
}, { collection: 'jobpost' });

export interface JobPost extends Document {
  name: string;
  email: string;
  about: string;
  experience: string;
  language: string;
}

export const JobPostModel = model<JobPost>('JobPost', JobPostSchema);
