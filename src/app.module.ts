import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { RoleService } from './role/role.service';

@Module({
  controllers: [],
  providers: [RoleService],
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTRGER_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB_NAME,
      models: [Users],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
  ],
})

export class AppModule{}