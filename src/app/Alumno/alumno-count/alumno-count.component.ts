import { Component, Input, Output, EventEmitter} from '@angular/core';
import { AlumnoListaComponent } from '../alumno-lista/alumno-lista.component';

@Component({
  selector: 'app-alumno-count',
  templateUrl: './alumno-count.component.html',
  styleUrls: ['./alumno-count.component.css']
})
export class AlumnoCountComponent{

  @Input()
  hombres: number = 0;

  @Input()
  mujeres: number = 0;

  @Input()
  total: number = 0;

  opcionElegida: string = "total";

  @Output()
  globalElegido: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  alCambiar(){
    this.globalElegido.emit(this.opcionElegida);
  }



}
