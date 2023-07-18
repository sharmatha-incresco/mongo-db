import { Schema, Document, model } from 'mongoose';

export const JobSchema = new Schema({
  position: { type: String },
  company: { type: String },
  location: { type: String },
  date: { type: String },
  name: { type: String },
  email: { type: String},
  about: { type: String },
  experience: { type: String },
  language: { type: String },
}, { collection: 'job' });

export interface Job extends Document {
  position: string;
  company: string;
  location: string;
  date: string;
  name: string;
  email: string;
  about: string;
  experience: string;
  language: string;
}

export const JobModelget = model<Job>('Jobget', JobSchema);
export const JobModelpost = model<Job>('Jobpost', JobSchema);
