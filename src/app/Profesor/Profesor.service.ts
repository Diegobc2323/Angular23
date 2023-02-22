import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from './IProfesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

constructor(public _http: HttpClient) { }

getProfesores(): Observable<Profesor[]> {
  return this._http.get<Profesor[]>('https://localhost:44393/api/Profesor');
}
}
