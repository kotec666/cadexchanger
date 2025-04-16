import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    format: 'string',
    title: 'Name',
    description: `Min 1 symbol / maximum 60 symbols`,
  })
  @IsNotEmpty()
  @Length(1, 60)
  name: string;

  @ApiProperty({
    format: 'email',
    title: 'Email',
    description: `example: alexkotov639@gmail.com | from 1 symbol to 60 symbols`,
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(1, 60)
  email: string;

  @ApiProperty({
    format: 'string',
    title: 'message',
    description: `Min 5 symbols / maximum 350 symbols`,
  })
  @IsNotEmpty({
    message: 'Validation failed',
  })
  @Length(5, 350)
  message: string;
}
