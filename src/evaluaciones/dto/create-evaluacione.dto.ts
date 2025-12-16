import {IsNumber} from 'class-validator';
export class CreateEvaluacioneDto {

  @IsNumber()
  calificaciones: number;

  @IsNumber()
  fecha: number;

}
