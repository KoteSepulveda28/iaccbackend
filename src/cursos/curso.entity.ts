import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsInt } from 'class-validator';
import { Alumno } from 'src/alumnos/alumno.entity';

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nombre: string;

    @Column()
    @IsNotEmpty()
    codigo: string;

    @Column()
    @IsNotEmpty()
    @IsInt()
    anio: number;

    @Column()
    @IsNotEmpty()
    semestre: string;
    
    @Column()
    @IsNotEmpty()
    sede: string;

    @OneToMany(() => Alumno, alumno => alumno.curso)
    alumnos: Alumno[];


}
