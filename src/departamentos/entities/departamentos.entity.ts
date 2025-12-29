import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Empleados } from '../../empleados/entities/empleados.entity';
import { Proyectos } from 'src/proyectos/entities/proyectos.entity';
import { Cargo } from 'src/cargo/entities/cargo.entity';

@Entity('departamentos')
export class Departamentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @OneToOne(() => Empleados, (empleado) => empleado.departamento)
  @JoinColumn({ name: 'idempleados' })
  empleado: Empleados;

  @OneToMany(() => Proyectos, (proyecto) => proyecto.departamento)
  proyecto: Proyectos[];

  @OneToMany(() => Cargo, (cargo) => cargo.departamento)
  cargo: Cargo[];
}
