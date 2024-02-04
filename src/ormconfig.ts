import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { configuration } from './config/configuration';
require('dotenv').config();
export const getORMConfig = (): TypeOrmModuleOptions => {
    const { dbHost, username, password, dbName } =
        configuration().databaseConfig;
    const config: TypeOrmModuleOptions = {
        type: 'mysql',
        host: dbHost,
        port: 3306,
        username,
        password,
        database: dbName,
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
        synchronize: false,
        migrations: [`${__dirname}/**/db/migrations/*{.ts,.js}`],
        migrationsTableName: 'migrations_TypeORM',
        extra: {
            charset: 'utf8mb4_general_ci',
        },
    };
    return config;
};
