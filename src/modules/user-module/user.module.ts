import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { TYPES } from './interface/type';
import { AcademicsUserService } from './services/academics-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicsUser } from './entity/user.entity';

const academicsClassService = {
    provide: TYPES.services.AcademicsUserService,
    useClass: AcademicsUserService,
};

@Module({
    imports: [TypeOrmModule.forFeature([AcademicsUser])],
    controllers: [UserController],
    providers: [academicsClassService],
})
export class UserModule {}
