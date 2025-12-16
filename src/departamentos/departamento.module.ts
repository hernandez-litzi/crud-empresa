import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentosService } from './departamento.service';
import { DepartamentosController } from './departamento.controller';
import { Departamentos } from './entities/departamentos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departamentos])],
  controllers: [DepartamentosController],
  providers: [DepartamentosService],
})
export class DepartamentosModule {}
