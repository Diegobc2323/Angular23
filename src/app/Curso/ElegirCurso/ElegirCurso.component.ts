import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../Curso';
import { CursoService } from '../Curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ElegirCurso',
  templateUrl: './ElegirCurso.component.html',
  styleUrls: ['./ElegirCurso.component.css']
})
export class ElegirCursoComponent implements OnInit {


  @Output()
  cursoElegido: EventEmitter<number> = new EventEmitter<number>();

  eleccion: number = 0;

  cursos: Curso[]

  constructor(private cursoService: CursoService, private activatedRoute : ActivatedRoute) {
    this.cursos = []
  }

  ngOnInit() {
    this.cursoService.getCursos().subscribe((datosCursos) => this.cursos = datosCursos);
  }

  alCambiar(){
    this.cursoElegido.emit(this.eleccion);
  }

}
