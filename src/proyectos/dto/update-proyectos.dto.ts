import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoDto } from './create-proyectos.dto';

export class UpdateProyectoDto extends PartialType(CreateProyectoDto) {}
