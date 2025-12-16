import { IsString, IsNumber } from 'class-validator';
export class CreateProyectoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  fechainicio: string;

  @IsNumber()
  fechafinal: string;
}
