// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './cursos/curso.entity';
import { Alumno } from './alumnos/alumno.entity';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432, 
      username: 'postgres', 
      password: 'Adm*+2023',
      database: 'iacc_db_test',
      entities: [Curso, Alumno],
      synchronize: true,
    }),
    CursosModule,
    AlumnosModule,
  ],
})
export class AppModule {}
