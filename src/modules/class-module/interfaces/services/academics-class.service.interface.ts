import { CreateAcademicsClassDto } from '../../dtos/createClass.dto';
import { AcademicsClass } from '../../entity/class.entity';
import { AssignStudentToClassDto } from '../../dtos/assignStudentToClass.dto';
import { UpdateAcademicsClassDto } from '../../dtos/updateClass.dto';
export interface AcademicsClassServiceInterface {
    create(
        AcademicsClassDomain: CreateAcademicsClassDto,
    ): Promise<AcademicsClass>;

    update(id: string, updateClassDto: UpdateAcademicsClassDto);

    getClasses(): Promise<AcademicsClass[]>;

    getClass(id: string): Promise<AcademicsClass>;

    assignStudentToClass(
        assignStudentToClassDto: AssignStudentToClassDto,
        classId: string,
    );
}
