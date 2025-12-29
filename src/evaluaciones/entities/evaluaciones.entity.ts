import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Proyectos } from 'src/proyectos/entities/proyectos.entity';

@Entity('evaluaciones')
export class Evaluaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  calificaciones: number;

  @Column()
  fecha: string;

  @Column()
  observaciones: string;

  @ManyToOne(() => Proyectos)
  @JoinColumn({ name: 'idproyecto' })
  proyecto: Proyectos;
}
