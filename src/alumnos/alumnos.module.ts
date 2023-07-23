// src/alumnos/alumnos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './alumno.entity';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno])],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
