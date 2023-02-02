import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit{

  alumnos: any[] = [
    {nombre: 'Perico', apellido: 'Palotes', direccion: 'Calle Falsa 123', fnac: '6/12/1965', sexo: 'Hombre'},
    {nombre: 'Juana', apellido: 'Perez', direccion: 'Calle Falsa 123', fnac: '4/15/1965', sexo: 'Mujer'},
    {nombre: 'María', apellido: 'Gomez', direccion: 'Calle Falsa 123', fnac: '1/30/1965', sexo: 'Mujer'},
    {nombre: 'Julian', apellido: 'Gonzalez', direccion: 'Calle Falsa 123', fnac: '12/12/1965', sexo: 'Hombre'},
  ]

  //create a function that retourns the number of elements in the array
  totalAlumnos(): number {
    return this.alumnos.length;
  }

  hombresAlumnos(): number {
    return this.alumnos.filter(alumno => alumno.sexo === 'Hombre').length;
  }

  mujeresAlumnos(): number {
    return this.alumnos.filter(alumno => alumno.sexo === 'Mujer').length;
  }

  seleccion: string = 'total';

  constructor() {}

  ngOnInit() {

  }
}
