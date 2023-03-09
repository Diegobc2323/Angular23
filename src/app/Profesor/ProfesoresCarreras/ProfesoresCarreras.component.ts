import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../Profesor.service';
import { Profesor } from '../IProfesor';

@Component({
  selector: 'app-ProfesoresCarreras',
  templateUrl: './ProfesoresCarreras.component.html',
  styleUrls: ['./ProfesoresCarreras.component.css']
})
export class ProfesoresCarrerasComponent implements OnInit {

  profesores : Profesor[];

  constructor(private profesorService : ProfesorService,private activatedRoute: ActivatedRoute) {
    this.profesores = [];
   }

  ngOnInit() {
    let filtro = this.activatedRoute.snapshot.params['carreraID'];

    this.profesorService.getProfesores().subscribe(datosProfesores => {
      this.profesores = datosProfesores.filter(profesor => profesor.carreraID == filtro);
    });
  }

}
