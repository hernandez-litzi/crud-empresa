import { IsNumber, IsString } from 'class-validator';
export class CreateEvaluacioneDto {
  @IsNumber()
  calificaciones: number;

  @IsString()
  fecha: string;

  @IsString()
  observaciones: string;
}
