import { Component, Input, OnInit } from '@angular/core';
import { AlumnoServiceService } from './AlumnoService.service';
import { Alumno } from './IAlumno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Alumno',
  templateUrl: './Alumno.component.html',
  styleUrls: ['./Alumno.component.css'],

})
export class AlumnoComponent implements OnInit {

  alumno: Alumno;

  constructor(private alumnoService: AlumnoServiceService, private activatedRoute : ActivatedRoute) {
    this.alumno = new Alumno(1,"","","","","",0)
  }
  visibles : boolean = true;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.alumnoService.getAlumno(id).subscribe((datosAlumno)=> this.alumno = datosAlumno) //Aqui cargamos ya el alumno con los datos
  }



}
