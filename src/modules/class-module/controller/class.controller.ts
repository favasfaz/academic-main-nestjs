import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Patch,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAcademicsClassDto } from '../dtos/createClass.dto';
import { TYPES } from '../interfaces/types';
import { AssignStudentToClassDto } from '../dtos/assignStudentToClass.dto';
import { AcademicsClassBusiness } from '../business/academics-class.business';
import { UpdateAcademicsClassDto } from '../dtos/updateClass.dto';
import { TransformInterceptor } from '../../../common/interceptors/transform.interceptor';

@Controller('classes')
@ApiTags('Classes')
@UseInterceptors(TransformInterceptor)
export class ClassController {
    constructor(
        @Inject(TYPES.business.AcademicsClassBusiness)
        private academicsClassBusiness: AcademicsClassBusiness,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create Class' })
    async create(@Body() createClassDto: CreateAcademicsClassDto) {
        const academicsClass = await this.academicsClassBusiness.create(
            createClassDto,
        );
        return { result: academicsClass, message: 'Success' };
    }

    @Get()
    @ApiOperation({ summary: 'Get classes' })
    async getClasses() {
        const classes = await this.academicsClassBusiness.getClasses();
        return { result: classes, message: 'Success' };
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update Class' })
    async update(
        @Param('id') id: string,
        @Body() updateClassDto: Partial<UpdateAcademicsClassDto>,
    ) {
        const academicsClass = await this.academicsClassBusiness.update(
            id,
            updateClassDto,
        );
        return { result: academicsClass, message: 'Success' };
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get class' })
    async getClass(@Param('id') id: string) {
        const academicsClass = await this.academicsClassBusiness.getClass(id);
        return { result: academicsClass, message: 'Success' };
    }

    @Patch('assign-student/:id')
    @ApiOperation({ summary: 'Assign students Class' })
    async assignStudentToClass(
        @Param('id') id: string,
        @Body() assignStudentToClassDto: AssignStudentToClassDto,
    ) {
        const academicsClass =
            await this.academicsClassBusiness.assignStudentToClass(
                assignStudentToClassDto,
                id,
            );
        return { result: academicsClass, message: 'Success' };
    }
}
