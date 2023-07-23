// src/alumnos/alumnos.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Alumno } from './alumno.entity';
import { AlumnosService } from './alumnos.service';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Get()
  async findAll(): Promise<Alumno[]> {
    return this.alumnosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Alumno> {
    return this.alumnosService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() alumno: Alumno): Promise<Alumno> {
    return this.alumnosService.create(alumno);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: number, @Body() alumno: Alumno): Promise<Alumno> {
    return this.alumnosService.update(id, alumno);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.alumnosService.delete(id);
  }
}
