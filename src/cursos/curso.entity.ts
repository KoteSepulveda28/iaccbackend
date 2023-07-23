import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsInt } from 'class-validator';

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
}
