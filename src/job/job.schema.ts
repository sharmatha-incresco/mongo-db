import { Schema, Document ,model} from 'mongoose';

export const JobSchema = new Schema({
  position: String,
  company: String,
  location: String,
  date: String,
}, {collection: 'job'});

export interface Job extends Document {
    position: string,
    company: string,
    location: string,
    date: string,
}
export const JobModel = model<Job>('Job', JobSchema);