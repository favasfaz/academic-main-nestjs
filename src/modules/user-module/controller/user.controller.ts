/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, Inject } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAcademicsClassDto } from '../../class-module/dtos/createClass.dto';
import { CreateAcademicsUserDto } from '../dtos/createUser.dto';
import { TYPES } from '../interface/type';
import { AcademicsUserService } from '../services/academics-user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(
        @Inject(TYPES.services.AcademicsUserService)
        private academicsUserService: AcademicsUserService,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create User (Mock)' })
    async create(@Body() createAcademicsUserDto: CreateAcademicsUserDto) {
        const academicsClass = await this.academicsUserService.create(
            createAcademicsUserDto,
        );
        return academicsClass;
    }
}
