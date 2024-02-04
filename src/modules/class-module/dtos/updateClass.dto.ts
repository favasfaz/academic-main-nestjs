import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';
export class UpdateAcademicsClassDto {
    @ApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    @IsOptional()
    className: string;

    @ApiProperty({
        type: Number,
        required: false,
    })
    @IsNumber()
    @IsOptional()
    classFee: number;

    @ApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    @IsOptional()
    classInChargeId: string;
}
