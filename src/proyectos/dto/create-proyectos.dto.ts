import { IsString } from 'class-validator';
export class CreateProyectoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsString()
  fechainicio: string;

  @IsString()
  fechafinal: string;
}
