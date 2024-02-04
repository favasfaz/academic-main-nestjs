import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicsClassServiceInterface } from '../interfaces/services/academics-class.service.interface';
import { AcademicsClass } from '../entity/class.entity';
import { Repository } from 'typeorm';
import { CreateAcademicsClassDto } from '../dtos/createClass.dto';
import { AcademicsUser } from '../../user-module/entity/user.entity';
import { AssignStudentToClassDto } from '../dtos/assignStudentToClass.dto';
import { UpdateAcademicsClassDto } from '../dtos/updateClass.dto';

@Injectable()
export class AcademicsClassService implements AcademicsClassServiceInterface {
    constructor(
        @InjectRepository(AcademicsClass)
        private academicsClassRepository: Repository<AcademicsClass>,
    ) {}

    async create(
        createClassDto: CreateAcademicsClassDto,
    ): Promise<AcademicsClass> {
        const academicsClass = await this.academicsClassRepository.create(
            createClassDto,
        );
        academicsClass.classInCharge = createClassDto.classInChargeId as any;

        return await this.academicsClassRepository.save(academicsClass);
    }

    async update(
        id: string,
        updateClassDto: Partial<UpdateAcademicsClassDto>,
    ): Promise<AcademicsClass> {
        const academicsClass = await this.academicsClassRepository.findOneBy({
            id,
        });

        if (!academicsClass) {
            throw new NotFoundException('Class not found');
        }
        Object.assign(academicsClass, updateClassDto);
        return this.academicsClassRepository.save(academicsClass);
    }

    getClasses(): Promise<AcademicsClass[]> {
        return this.academicsClassRepository.find({
            select: {
                id: true,
                className: true,
                classFee: true,
                classInCharge: {
                    id: true,
                    fName: true,
                    contactNum: true,
                },
            },
            relations: {
                classInCharge: true,
            },
        });
    }

    getClass(id: string): Promise<AcademicsClass> {
        const academicClass = this.academicsClassRepository.findOne({
            where: { id: id },
            relations: {
                classInCharge: true,
                students: true,
            },
        });
        if (!academicClass) {
            throw new NotFoundException('Class not found');
        }

        return academicClass;
    }

    async assignStudentToClass(
        assignStudentToClassDto: AssignStudentToClassDto,
        classId: string,
    ) {
        const academicClass = await this.academicsClassRepository.findOneBy({
            id: classId,
        });

        if (!academicClass) {
            throw new NotFoundException('Class not found');
        }

        if (!academicClass.students) {
            academicClass.students = [];
        }

        assignStudentToClassDto.students.forEach((id) => {
            const student = new AcademicsUser();
            student.id = id;
            academicClass.students.push(student);
        });
        return await this.academicsClassRepository.save(academicClass);
    }
}
