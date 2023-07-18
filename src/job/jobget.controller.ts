import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
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
  async getJobsByFilter(
    @Query('position') position?: string,
    @Query('company') company?: string,
    @Query('location') location?: string,
    @Query('date') date?: string,
  ): Promise<JobGet[]> {
    if (position) {
      return this.jobGetService.findByPosition(position);
    } else if (company) {
      return this.jobGetService.findByCompany(company);
    } else if (location) {
      return this.jobGetService.findByLocation(location);
    } else if (date) {
      return this.jobGetService.findByDate(date);
    } else {
      return this.jobGetService.findAll();
    }
  }
}
