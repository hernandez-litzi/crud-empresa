import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { Cargo } from './entities/cargo.entity';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo) private cargoRepository: Repository<Cargo>,
  ) {}
  create(CreateCargoDto: CreateCargoDto) {
    const cargo = this.cargoRepository.create(CreateCargoDto);
    return this.cargoRepository.save(cargo);
  }
  findAll() {
    return this.cargoRepository.find();
  }

  findOne(id: number) {
    return this.cargoRepository.findOne({ where: { id } });
  }

  async update(id: number, UpdateCargoDto: UpdateCargoDto) {
    const cargo = await this.cargoRepository.findOne({
      where: { id },
    });

    if (!cargo) {
      throw new Error('Cargo no encontrado');
    }

    Object.assign(cargo, UpdateCargoDto);
    return this.cargoRepository.save(cargo);
  }

  remove(id: number) {
    return this.cargoRepository.delete(id);
  }
}
