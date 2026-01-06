import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Departamentos } from 'src/departamentos/entities/departamentos.entity';
import { Evaluaciones } from 'src/evaluaciones/entities/evaluaciones.entity';

@Entity('proyectos')
export class Proyectos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  fechainicio: string;

  @Column()
  fechafinal: string;

  @ManyToOne(() => Departamentos)
  @JoinColumn({ name: 'iddepartamento' })
  departamento: Departamentos;

  @OneToMany(() => Evaluaciones, (evaluaciones) => evaluaciones.proyecto)
  evaluacion: Evaluaciones[];
}
