import { Component, OnInit } from '@angular/core';
import { ProfesorService } from './Profesor.service';
import { Profesor } from './IProfesor';

@Component({
  selector: 'app-Profesor',
  templateUrl: './Profesor.component.html',
  styleUrls: ['./Profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  profesores: Profesor[];

  constructor(private service: ProfesorService) {
    this.profesores = [];
  }

  ngOnInit() {
    this.service.getProfesores().subscribe((datosProfesores) => this.profesores = datosProfesores);
   }

}
