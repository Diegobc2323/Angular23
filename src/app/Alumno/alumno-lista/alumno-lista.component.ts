import { Component, OnInit } from '@angular/core';
import { Alumno } from '../IAlumno';
import { AlumnoServiceService } from '../AlumnoService.service';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit{

  seleccion: string = 'total';

  alumnos: Alumno[];

  constructor(private service: AlumnoServiceService) {
    this.alumnos = [];
  }

  ngOnInit() {
    this.service.getAlumnos().subscribe((datosAlumnos) => this.alumnos = datosAlumnos);
   }

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

  alPulsar(opcionElegida: string): void {
    this.seleccion = opcionElegida;
  }


}
