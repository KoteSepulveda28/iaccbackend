import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { IsNotEmpty, IsString, Min, IsNumber } from 'class-validator';
import { Curso } from 'src/cursos/curso.entity';

@Entity()
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    apellido: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    email: string;

    @Column()
    @Min(1)
    @IsNumber()
    edad: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    direccion: string;

    // Definir la relación muchos a uno con la tabla Cursos
    @ManyToOne(() => Curso, curso => curso.alumnos)
    curso: Curso;
}
