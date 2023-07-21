import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiParam, ApiBody } from '@nestjs/swagger';
import { JobGetService } from './jobget.service';
import { JobGet } from './jobget.schema';
import { UpdateApplicantsCountDto } from './jobget.dto';

@Controller('job/get')
@ApiTags('Job Get')
export class JobGetController {
  constructor(private readonly jobGetService: JobGetService) {}

  @Get('/all')
  @ApiOperation({ summary: 'Get all jobs' })
  async findAll(): Promise<JobGet[]> {
    return this.jobGetService.findAll();
  }

  @Get('/filter')
  @ApiOperation({ summary: 'Get jobs by filter' })
  @ApiQuery({ name: 'position', type: String, required: false })
  @ApiQuery({ name: 'company', type: String, required: false })
  @ApiQuery({ name: 'location', type: String, required: false })
  @ApiQuery({ name: 'date', type: String, required: false })
  @ApiQuery({ name: 'skills', type: [String], required: false })
  @ApiQuery({ name: 'experience', type: String, required: false })
  @ApiQuery({ name: 'education', type: String, required: false })
  async getJobsByFilter(
    @Query('position') position?: string,
    @Query('company') company?: string,
    @Query('location') location?: string,
    @Query('date') date?: string,
    @Query('skills') skills?: string[],
    @Query('experience') experience?: string,
    @Query('education') education?: string,
  ): Promise<JobGet[]> {
    if (position) {
      return this.jobGetService.findByPosition(position);
    } else if (company) {
      return this.jobGetService.findByCompany(company);
    } else if (location) {
      return this.jobGetService.findByLocation(location);
    } else if (date) {
      return this.jobGetService.findByDate(date);
    } else if (skills && skills.length > 0) {
      return this.jobGetService.findBySkills(skills);
    } else if (experience) {
      return this.jobGetService.findByExperience(experience);
    } else if (education) {
      return this.jobGetService.findByEducation(education);
    } else {
      return this.jobGetService.findAll();
    }
  }

  @Post('/updateApplicantsCount/:jobId')
  @ApiOperation({ summary: 'Update applicants count for a job' })
  @ApiParam({ name: 'jobId', type: String })
  async updateApplicantsCount(@Param('jobId') jobId: string): Promise<JobGet> {
    return this.jobGetService.incrementApplicantsCount(jobId);
  }
}