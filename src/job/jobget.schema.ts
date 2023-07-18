import { Schema, Document, model } from 'mongoose';

export const JobGetSchema = new Schema({
  position: { type: String },
  company: { type: String },
  location: { type: String },
  date: { type: String },
}, { collection: 'jobget' });

export interface JobGet extends Document {
  position: string;
  company: string;
  location: string;
  date: string;
}

export const JobGetModel = model<JobGet>('JobGet', JobGetSchema);
