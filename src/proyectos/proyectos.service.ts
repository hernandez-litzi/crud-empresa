import { Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyectos.dto';
import { UpdateProyectoDto } from './dto/update-proyectos.dto';
import { Proyectos } from './entities/proyectos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyectos)
    private proyectoRepository: Repository<Proyectos>,
  ) {}
  create(CreateProyectoDto: CreateProyectoDto) {
    const proyectos = this.proyectoRepository.create(CreateProyectoDto);
    return this.proyectoRepository.save(proyectos);
  }

  findAll() {
    return this.proyectoRepository.find();
  }

  findOne(id: number) {
    return this.proyectoRepository.findOne({ where: { id } });
  }

  async update(id: number, UpdateProyectoDto: UpdateProyectoDto) {
    const proyectos = await this.proyectoRepository.findOne({
      where: { id },
    });

    if (!proyectos) {
      throw new Error('Proyecto no encontrado');
    }

    Object.assign(proyectos, UpdateProyectoDto);
    return this.proyectoRepository.save(proyectos);
  }

  remove(id: number) {
    return this.proyectoRepository.delete(id);
  }
}
