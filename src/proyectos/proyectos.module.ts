import { Module } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { ProyectosController } from './proyectos.controller';
import { Proyectos } from './entities/proyectos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Proyectos])],
  controllers: [ProyectosController],
  providers: [ProyectosService],
})
export class ProyectosModule {}
