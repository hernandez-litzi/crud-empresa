import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentosModule } from './departamentos/departamento.module';
import { CargoModule } from './cargo/cargo.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hernandez12',
      database: 'crudEmpresa',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    EmpleadosModule,
    DepartamentosModule,
    CargoModule,
    ProyectosModule,
    EvaluacionesModule,
  ],

})
export class AppModule {}
