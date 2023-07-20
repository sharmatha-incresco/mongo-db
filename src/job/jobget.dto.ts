import { ApiProperty } from '@nestjs/swagger';

export class UpdateApplicantsCountDto {
  @ApiProperty()
  count: number;
}
