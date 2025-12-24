import { Departamentos } from 'src/departamentos/entities/departamentos.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TipoContrato } from '../enums/tipoContrato.enum';
@Entity('cargo')
export class Cargo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({
    type: 'enum',
    enum: TipoContrato,
  })
  tipo_contrato: TipoContrato;

  @ManyToOne(() => Departamentos)
  @JoinColumn({ name: 'iddepartamento' })
  departamento: Departamentos;
}
