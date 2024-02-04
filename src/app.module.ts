import { UserModule } from './modules/user-module/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from './config/configuration';
import { ClassModule } from './modules/class-module/class.module';
import { getORMConfig } from './ormconfig';

@Module({
    imports: [
        UserModule,
        ClassModule,
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
        TypeOrmModule.forRoot(getORMConfig()),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
