import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Proyectos } from "src/proyectos/entities/proyectos.entity";

@Entity('evaluaciones')
export class Evaluaciones {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    calificaciones: number;

    @Column()
    fecha: number;

    @ManyToOne(() => Proyectos)
    @JoinColumn({ name: 'idproyecto' }) 
    proyectos: Proyectos;  
}