import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsArray } from 'class-validator';
export class AssignStudentToClassDto {
    @ApiProperty()
    @IsArray()
    students: string[];
}
