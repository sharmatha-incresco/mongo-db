import { ApiProperty } from '@nestjs/swagger';

export class UpdateApplicantsCountDto {
  @ApiProperty()
  count: number;

  @ApiProperty()
  jobId: string; // New property to store the jobId
}