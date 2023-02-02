import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alumno',
  templateUrl: './Alumno.component.html',
  styleUrls: ['./Alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  columnas: number = 4
  nombre: string = 'Perico';
  apellido: string = 'Palotes';
  direccion: string = 'Calle Falsa 123';
  edad: number = 18;
  visibles : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  alternarVisibles(): void {
    this.visibles = !this.visibles;
  }

}
