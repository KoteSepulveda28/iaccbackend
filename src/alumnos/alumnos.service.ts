// src/alumnos/alumnos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './alumno.entity';

@Injectable()
export class AlumnosService {
  constructor(
    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,
  ) {}

  async findAll(): Promise<Alumno[]> {
    return this.alumnoRepository.find();
  }

  async findOne(id: number): Promise<Alumno> {
    return this.alumnoRepository.findOne({where : {id}});
  }

  async create(alumno: Alumno): Promise<Alumno> {
    return this.alumnoRepository.save(alumno);
  }

  async update(id: number, alumno: Alumno): Promise<Alumno> {
    const existingAlumno = await this.alumnoRepository.findOne({where : {id}});
    if (!existingAlumno) {
      return null;
    }
    return this.alumnoRepository.save({ ...existingAlumno, ...alumno });
  }

  async delete(id: number): Promise<void> {
    await this.alumnoRepository.delete(id);
  }
}
