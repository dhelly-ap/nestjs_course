import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface IUserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class Users extends Model<Users, IUserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'test@email.com', description: 'Users email'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: 'password', description: 'Users password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'true', description: 'Define is user banned'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'Some reason', description: 'Reason of users ban'})
  @Column({type: DataType.STRING})
  banReason: string;
}