import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Departamentos } from '../../departamentos/entities/departamentos.entity';

@Entity('empleados')
export class Empleados {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  telefono: string;

  @Column()
  correo: string;

  @OneToOne(() => Departamentos, (departamento) => departamento.empleado)
  departamento: Departamentos;
}
