import { Component, OnInit } from '@angular/core';
import { ProfesorService } from './Profesor.service';
import { Profesor } from './IProfesor';
import { CarreraService } from '../Carrera/Carrera.service';
import { Carrera } from '../Carrera/Carrera';

@Component({
  selector: 'app-Profesor',
  templateUrl: './Profesor.component.html',
  styleUrls: ['./Profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  profesores: Profesor[];
  carreras: Carrera[];

  constructor(private service: ProfesorService, private carreraService: CarreraService) {
    this.profesores = [];
    this.carreras = [];
  }

  ngOnInit() {
    this.service.getProfesores().subscribe((datosProfesores) => this.profesores = datosProfesores);
    this.carreraService.getCarreras().subscribe((datosCarreras) => this.carreras = datosCarreras);
   }

}
