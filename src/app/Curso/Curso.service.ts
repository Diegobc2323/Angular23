import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService{

constructor(public _http: HttpClient) { }


  getCursos(): Observable<Curso[]> {
    return this._http.get<Curso[]>('https://localhost:44393/api/Curso');

  }


}
