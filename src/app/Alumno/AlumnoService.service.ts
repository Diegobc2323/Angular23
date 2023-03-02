import { Injectable } from '@angular/core';
import { Alumno } from './IAlumno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  constructor(public _http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this._http.get<Alumno[]>('https://localhost:44393/api/Alumno');
  }

  getAlumno(id:number): Observable<Alumno> {
    return this._http.get<Alumno>('https://localhost:44393/api/Alumno/'+id);
  }
}


