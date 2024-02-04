import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAcademicsUserDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    userId: string;

    @ApiProperty({
        type: String,
    })
    @IsString()
    fName: string;

    @ApiProperty({
        type: String,
    })
    @IsString()
    contactNum: string;

    @ApiProperty({
        type: String,
    })
    @IsString()
    userRole: string;
}
