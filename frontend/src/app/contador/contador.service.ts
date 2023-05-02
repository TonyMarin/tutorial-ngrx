import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Operando } from './contador.model';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  baseUrl = 'http://localhost:8066/contador';

  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  // return a Operando
  incrementar(data: Operando): Observable<Operando> {
    return this.http.post<Operando>(this.baseUrl + '/incrementar', data);
  }
}
