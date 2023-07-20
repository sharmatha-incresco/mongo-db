import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiParam, ApiBody } from '@nestjs/swagger';
import { JobGet } from './jobget.schema';
import { JobGetService } from './jobget.service';

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
  @ApiQuery({ name: 'skills', type: [String], required: false }) // Add skills query parameter
  @ApiQuery({ name: 'experience', type: String, required: false }) // Add experience query parameter
  @ApiQuery({ name: 'education', type: String, required: false }) // Add education query parameter
  async getJobsByFilter(
    @Query('position') position?: string,
    @Query('company') company?: string,
    @Query('location') location?: string,
    @Query('date') date?: string,
    @Query('skills') skills?: string[], // Add skills parameter
    @Query('experience') experience?: string, // Add experience parameter
    @Query('education') education?: string, // Add education parameter
  ): Promise<JobGet[]> {
    if (position) {
      return this.jobGetService.findByPosition(position);
    } else if (company) {
      return this.jobGetService.findByCompany(company);
    } else if (location) {
      return this.jobGetService.findByLocation(location);
    } else if (date) {
      return this.jobGetService.findByDate(date);
    } else if (skills && skills.length > 0) { // Check if skills exist and are not empty
      return this.jobGetService.findBySkills(skills);
    } else if (experience) { // Check if experience is provided
      return this.jobGetService.findByExperience(experience);
    } else if (education) { // Check if education is provided
      return this.jobGetService.findByEducation(education);
    } else {
      return this.jobGetService.findAll();
    }
  }

  @Post('/updateApplicantsCount/:jobId')
  @ApiOperation({ summary: 'Update applicants count for a job' })
  @ApiParam({ name: 'jobId', type: String }) // Fix the error by adding this import
  @ApiBody({ type: Number, description: 'New applicants count' }) // Fix the error by adding this import
  async updateApplicantsCount(@Param('jobId') jobId: string, @Body() count: number): Promise<JobGet> {
    return this.jobGetService.updateApplicantsCount(jobId, count);
  }
}
