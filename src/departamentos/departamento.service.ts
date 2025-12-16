import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamentos } from 'src/departamentos/entities/departamentos.entity';
import { CreateDepartamentoDto } from './dto/create-departamentos.dto';
import { UpdateDepartamentoDto } from './dto/update-departamentos.dto';

@Injectable()
export class DepartamentosService {
  constructor( @InjectRepository(Departamentos) private departamentoRepository: Repository<Departamentos>) {}
    create(CreateDepartamentoDto: CreateDepartamentoDto) {
    const departamentos = this.departamentoRepository.create(CreateDepartamentoDto);
    return this.departamentoRepository.save(departamentos);
    }


  findAll() {
    return this.departamentoRepository.find();
  }

  findOne(id: number) {
    return this.departamentoRepository.findOne({ where: { id } });
  }
 
async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
  const departamento = await this.departamentoRepository.findOne({
    where: { id },
  });


  if (!departamento) {
    throw new Error('Departamento no encontrado');
  }

  Object.assign(departamento, updateDepartamentoDto);
  return this.departamentoRepository.save(departamento);
}

  remove(id: number) {
    return this.departamentoRepository.delete(id);
  }
}


