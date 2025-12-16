import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartamentoDto } from './create-departamentos.dto';

export class UpdateDepartamentoDto extends PartialType(CreateDepartamentoDto) {}

