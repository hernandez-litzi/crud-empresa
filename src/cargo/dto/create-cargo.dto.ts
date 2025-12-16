import { IsEnum, IsString } from 'class-validator';
import { TipoContrato } from '../enums/tipoContrato.enum';
export class CreateCargoDto {    
      @IsString()
      nombre: string;

      @IsEnum(TipoContrato, {
       message:
      'tipo_contrato debe ser: Tiempo completo, Medio tiempo, Temporal o Por proyecto',
       })

      @IsString()
      tipo_contrato: TipoContrato;
}
