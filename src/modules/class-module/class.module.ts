import { Module } from '@nestjs/common';
import { ClassController } from './controller/class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicsClass } from './entity/class.entity';
import { TYPES } from './interfaces/types';
import { AcademicsClassService } from './services/academics-class.service';
import { AcademicsUser } from '../user-module/entity/user.entity';
import { AcademicsClassBusiness } from './business/academics-class.business';

const academicsClassService = {
    provide: TYPES.services.AcademicsClassService,
    useClass: AcademicsClassService,
};

const academicsClassBusiness = {
    provide: TYPES.business.AcademicsClassBusiness,
    useClass: AcademicsClassBusiness,
};

@Module({
    imports: [TypeOrmModule.forFeature([AcademicsClass, AcademicsUser])],
    controllers: [ClassController],
    providers: [academicsClassService, academicsClassBusiness],
})
export class ClassModule {}
