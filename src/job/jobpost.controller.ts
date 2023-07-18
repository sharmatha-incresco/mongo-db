import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JobPost } from './jobpost.schema';
import { JobPostService } from './jobpost.service';
import { CreateJobPostDto } from './createJob.dto';

@Controller('job/post')
@ApiTags('Job Post')
export class JobPostController {
  constructor(private readonly jobPostService: JobPostService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Create a new job' })
  async createJob(@Body() createJobPostDto: CreateJobPostDto): Promise<JobPost> {
    return this.jobPostService.createJob(createJobPostDto);
  }
}
