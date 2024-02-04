/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAcademicsUserDto } from '../dtos/createUser.dto';
import { AcademicsUserServiceInterface } from '../interface/services/academics-user.service.interface';
import { AcademicsUser } from '../entity/user.entity';

@Injectable()
export class AcademicsUserService implements AcademicsUserServiceInterface {
    constructor(
        @InjectRepository(AcademicsUser)
        private academicsUserRepository: Repository<AcademicsUser>,
    ) {}

    async create(
        createAcademicsUserDto: CreateAcademicsUserDto,
    ): Promise<AcademicsUser> {
        const user = this.academicsUserRepository.create(
            createAcademicsUserDto,
        );
        return await this.academicsUserRepository.save(user);
    }
}
