import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { JobService } from './job.service';
import { Job } from './job.schema';
import { CreateUserDto } from './createUser.dto'; // Update import statement

@Controller('job')
@ApiTags('Job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('/all')
  @ApiOperation({ summary: 'Get all jobs' })
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get('/filter')
  @ApiQuery({ name: 'position', required: false })
  @ApiQuery({ name: 'company', required: false })
  @ApiQuery({ name: 'location', required: false })
  @ApiQuery({ name: 'date', required: false })
  async filterJobs(
    @Query('position') position?: string,
    @Query('company') company?: string,
    @Query('location') location?: string,
    @Query('date') date?: string,
  ): Promise<Job[]> {
    if (position) {
      return this.jobService.findByPosition(position);
    } else if (company) {
      return this.jobService.findByCompany(company);
    } else if (location) {
      return this.jobService.findByLocation(location);
    } else if (date) {
      return this.jobService.findByDate(date);
    } else {
      // No filters provided, return all jobs
      return this.jobService.findAll();
    }
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create a new job' })
  async createJob(@Body() createJobDto: CreateUserDto): Promise<Job> { // Update parameter type to CreateJobDto
    return this.jobService.createJob(createJobDto);
  }
}
