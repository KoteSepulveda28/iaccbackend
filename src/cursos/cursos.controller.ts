// src/cursos/cursos.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Curso } from './curso.entity';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  async findAll(): Promise<Curso[]> {
    return this.cursosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Curso> {
    return this.cursosService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() curso: Curso): Promise<Curso> {
    return this.cursosService.create(curso);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: number, @Body() curso: Curso): Promise<Curso> {
    return this.cursosService.update(id, curso);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.cursosService.delete(id);
  }
}
