// src/cursos/cursos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';
import { Alumno } from 'src/alumnos/alumno.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
    @InjectRepository(Alumno)
    private alumnoRepository: Repository<Alumno>,
  ) {}

  async findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

  async findOne(id: number): Promise<Curso> {
    return this.cursoRepository.findOne({where : {id}});
  }

  async create(curso: Curso): Promise<Curso> {
    return this.cursoRepository.save(curso);
  }

  async update(id: number, curso: Curso): Promise<Curso> {
    const existingCurso = await this.cursoRepository.findOne({where : {id}});
    if (!existingCurso) {
      return null;
    }
    return this.cursoRepository.save({ ...existingCurso, ...curso });
  }

  async delete(id: number): Promise<void> {
    await this.cursoRepository.delete(id);
  }

  // async addAlumnoToCurso(cursoId: number, id: number): Promise<void> {
  //   const curso = await this.cursoRepository.findOne(cursoId, { relations: ['alumnos'] });
  //   const alumno = await this.alumnoRepository.findOne({where : {id}});

  //   if (curso && alumno) {
  //     curso.alumnos.push(alumno);
  //     await this.cursoRepository.save(curso);
  //   }
  // }
}
