import { CreateAcademicsUserDto } from '../../dtos/createUser.dto';
import { AcademicsClass } from '../../../class-module/entity/class.entity';
import { AcademicsUser } from '../../entity/user.entity';

export interface AcademicsUserServiceInterface {
    create(
        createAcademicsUserDto: CreateAcademicsUserDto,
    ): Promise<AcademicsUser>;
}
