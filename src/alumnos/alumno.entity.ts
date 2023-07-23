import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString, Min, IsNumber } from 'class-validator';

@Entity()
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @Column()
    @Min(1)
    @IsNumber()
    edad: number;
}
