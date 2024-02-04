import { Expose, Transform } from 'class-transformer';
import { AcademicsUser } from '../../user-module/entity/user.entity';
export class GetClassDto {
    @Expose()
    id: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

    @Expose()
    className: string;

    @Expose()
    classFee: number;

    @Expose()
    classInCharge: Partial<AcademicsUser>;
}
