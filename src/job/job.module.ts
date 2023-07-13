// cats.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobController} from './job.controller';
import { jobService } from './job.service';
import { JobSchema } from './job.schema';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'job', schema: JobSchema }]),
  //   ElasticsearchModule.register({
  //     node: 'https://search-jobs-dev-kgd2gqal6pe6nrufnvugad5ybu.ap-south-1.es.amazonaws.com',
  //     auth: {
  //       username: 'admin',
  //       password: 'Test@123',
  //     },
  //   }),
 ],
  controllers: [JobController],
  providers: [jobService],
})
export class jobModule{}
