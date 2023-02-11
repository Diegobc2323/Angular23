import { Injectable } from '@angular/core';
import { Alumno } from './IAlumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

constructor() { }

getAlumnos(): Alumno[] {
    return [{nombre: 'Perico', apellido: 'Palotes', direccion: 'Calle Falsa 123', fnac: '6/12/1965', sexo: 'Hombre'},
    {nombre: 'Juana', apellido: 'Perez', direccion: 'Calle Falsa 123', fnac: '4/15/1965', sexo: 'Mujer'},
    {nombre: 'María', apellido: 'Gomez', direccion: 'Calle Falsa 123', fnac: '1/30/1965', sexo: 'Mujer'},
    {nombre: 'Julian', apellido: 'Gonzalez', direccion: 'Calle Falsa 123', fnac: '12/12/1965', sexo: 'Hombre'},]
  }
}


