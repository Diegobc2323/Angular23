import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoServiceService } from '../Alumno/AlumnoService.service';
import { Alumno } from '../Alumno/IAlumno';

@Component({
  selector: 'app-Curso',
  templateUrl: './Curso.component.html',
  styleUrls: ['./Curso.component.css']
})
export class CursoComponent implements OnInit {

  cursoSeleccionado: number;
  alumnos : Alumno[];

  constructor(private alumnosService: AlumnoServiceService, private activatedRoute: ActivatedRoute) {
    this.cursoSeleccionado = 0;
    this.alumnos = []

  }

  ngOnInit() {

  }

  ElegirCurso(cursoSeleccionado: number): void {

    this.alumnosService.getAlumnos().subscribe(datosAlumnos => {
       this.alumnos =  datosAlumnos.filter(alumno => alumno.cursoID == cursoSeleccionado);
    });
    console.log(this.alumnos);

  }
}
