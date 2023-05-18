import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({example: 'test@email.com', description: 'Users email'})
  readonly email: string;

  @ApiProperty({example: 'password', description: 'Users password'})
  readonly password: string;
}