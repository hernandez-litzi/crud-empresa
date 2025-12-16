import { IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsNumber()
  telefono: string;

  @IsEmail()
  correo: string;
}
