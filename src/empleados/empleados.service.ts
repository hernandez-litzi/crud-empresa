import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleados } from 'src/empleados/entities/empleados.entity';
import { CreateEmpleadoDto } from './dto/create-empleados.dto';
import { UpdateEmpleadoDto } from './dto/update-empleados.dto';

@Injectable()
export class EmpleadosService {
  constructor( @InjectRepository(Empleados) private empleadoRepository: Repository<Empleados>) {}
  create(createEmpleadoDto: CreateEmpleadoDto) {
  const empleados = this.empleadoRepository.create(createEmpleadoDto);
  return this.empleadoRepository.save(empleados);
  }

  findAll() {
    return this.empleadoRepository.find();
  }

  findOne(id: number) {
    return this.empleadoRepository.findOne({ where: { id } });
  }

  async update(id: number, UpdateEmpleadoDto: UpdateEmpleadoDto) {
  const empleados = await this.empleadoRepository.findOne({
    where: { id },
  });


  if (!empleados) {
    throw new Error('Empleado no encontrado');
  }

  Object.assign(empleados, UpdateEmpleadoDto);
  return this.empleadoRepository.save(empleados);
}

  remove(id: number) {
    return this.empleadoRepository.delete(id);
  }
}

