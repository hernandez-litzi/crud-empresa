import { IsString, IsEmail } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsString()
  telefono: string;

  @IsEmail()
  correo: string;
}
