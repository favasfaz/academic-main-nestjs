import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
export class CreateAcademicsClassDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    className: string;

    @ApiProperty({
        type: Number,
    })
    @IsNumber()
    classFee: number;

    @ApiProperty({
        type: String,
    })
    @IsString()
    classInChargeId: string;
}
