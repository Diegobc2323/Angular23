import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrera } from './Carrera';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(public _http: HttpClient) { }

  getCarreras(): Observable<Carrera[]> {
    return this._http.get<Carrera[]>('https://localhost:44393/api/Carrera');
  }


}
