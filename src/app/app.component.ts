import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <div>
      <button class="color" [class]="aplicarClases">Boton 1</button>
      <br><br><br>
      <button class="color italica negrita" [class.negrita]='false'>Boton 2</button>
      <br><br><br>
      <button [ngClass]='addClases()'>Boton 3</button>
      <br><br><br>
      <button (click)='onclick()'>Boton 4</button>
      <br><br><br>
      <img src="./assets/mex.png" alt="" height="100vh" *ngIf="visible">
    </div> -->
    <!-- <app-Alumno> -->
      <div class="p-5">
        <ul class="nav nav-tabs">
          <li class="nav-item"><a href="alumno" class="nav-link">Alumnos</a></li>
          <li class="nav-item"><a href="profesor" class="nav-link">Profesores</a></li>
        </ul>
        <router-outlet></router-outlet>
      </div>
  `,


  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  aplicarClases: string = 'italic negrita';
  aplicarNegrita: boolean = true;
  aplicarColor: boolean = true;

  addClases() {
    let clases = {
      negrita : this.aplicarNegrita,
      color : this.aplicarColor
    }
    return clases;
  }

  visible: boolean = true;

  onclick() {
    this.visible = !this.visible;
  }

  alternarVisible() {
    this.visible = !this.visible;
  }

  encabezado: string = "";
  nombre: string = 'Perico';
  apellido: string = 'Palotes';
  imagen: string = 'https://www.lectiva.com/assets/es/logos/centro/id/73750/size/m.jpg';
  desactivado: boolean = false;

  getNombreCompleto(): string {
    return this.nombre + ' ' + this.apellido;
  }
}

