import { AcademicsUser } from 'src/modules/user-module/entity/user.entity';

export interface AcademicsClassInterface {
    className: string;
    classFee: number;
    classInCharge: AcademicsUser;
}
