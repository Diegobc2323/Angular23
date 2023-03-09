import { Component, OnInit } from '@angular/core';
import { Carrera } from './Carrera';
import { CarreraService } from './Carrera.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Carrera',
  templateUrl: './Carrera.component.html',
  styleUrls: ['./Carrera.component.css']
})
export class CarreraComponent implements OnInit {


  carreras: Carrera[];

  constructor(private carreraService: CarreraService, private activatedRoute : ActivatedRoute) {
    this.carreras = []
   }

  ngOnInit() {
    this.carreraService.getCarreras().subscribe((datosCarreras) => this.carreras = datosCarreras);
  }

}
