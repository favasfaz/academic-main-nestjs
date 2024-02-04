import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicsClass } from '../entity/class.entity';
import { Repository } from 'typeorm';
import { CreateAcademicsClassDto } from '../dtos/createClass.dto';
import { AcademicsUser } from '../../user-module/entity/user.entity';
import { AssignStudentToClassDto } from '../dtos/assignStudentToClass.dto';
import { AcademicsClassBusinessInterface } from '../interfaces/business/academics-class.business.interface';
import { TYPES } from '../interfaces/types';
import { AcademicsClassService } from '../services/academics-class.service';
import { UpdateAcademicsClassDto } from '../dtos/updateClass.dto';

@Injectable()
export class AcademicsClassBusiness implements AcademicsClassBusinessInterface {
    constructor(
        @Inject(TYPES.services.AcademicsClassService)
        private academicsClassService: AcademicsClassService,
    ) {}

    async create(
        createClassDto: CreateAcademicsClassDto,
    ): Promise<AcademicsClass> {
        return await this.academicsClassService.create(createClassDto);
    }

    async update(id: string, updateClassDto: Partial<UpdateAcademicsClassDto>) {
        return await this.academicsClassService.update(id, updateClassDto);
    }

    getClasses(): Promise<AcademicsClass[]> {
        return this.academicsClassService.getClasses();
    }

    getClass(id: string): Promise<AcademicsClass> {
        return this.academicsClassService.getClass(id);
    }

    async assignStudentToClass(
        assignStudentToClassDto: AssignStudentToClassDto,
        classId: string,
    ) {
        return await this.academicsClassService.assignStudentToClass(
            assignStudentToClassDto,
            classId,
        );
    }
}
