import { Schema, Document, model } from 'mongoose';

export const JobGetSchema = new Schema({
  position: { type: String },
  company: { type: String },
  location: { type: String },
  date: { type: String },
  skills: [{ type: String }],
  experience: { type: String },
  education: { type: String },
  applicantsCount: { type: Number, default: 0 },
}, { collection: 'jobget' });

export interface JobGet extends Document {
  position: string;
  company: string;
  location: string;
  date: string;
  skills: string[];
  experience: string;
  education: string;
  applicantsCount: number;
}

export const JobGetModel = model<JobGet>('JobGet', JobGetSchema);
