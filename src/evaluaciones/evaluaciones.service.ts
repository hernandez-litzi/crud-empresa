import { Injectable } from '@nestjs/common';
import { CreateEvaluacioneDto } from './dto/create-evaluacione.dto';
import { UpdateEvaluacioneDto } from './dto/update-evaluacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Evaluaciones } from './entities/evaluaciones.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluacionesService {
  constructor(
    @InjectRepository(Evaluaciones)
    private evaluacionesRepository: Repository<Evaluaciones>,
  ) {}
  create(createEvaluacioneDto: CreateEvaluacioneDto) {
    const evaluaciones =
      this.evaluacionesRepository.create(createEvaluacioneDto);
    return this.evaluacionesRepository.save(evaluaciones);
  }

  findAll() {
    return this.evaluacionesRepository.find();
  }

  findOne(id: number) {
    return this.evaluacionesRepository.findOne({ where: { id } });
  }

  async update(id: number, UpdateEvaluacioneDto: UpdateEvaluacioneDto) {
    const evaluaciones = await this.evaluacionesRepository.findOne({
      where: { id },
    });

    if (!evaluaciones) {
      throw new Error('Proyecto no encontrado');
    }

    Object.assign(evaluaciones, UpdateEvaluacioneDto);
    return this.evaluacionesRepository.save(evaluaciones);
  }
  remove(id: number) {
    return this.evaluacionesRepository.delete(id);
  }
}
