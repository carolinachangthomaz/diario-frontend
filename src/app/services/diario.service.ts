import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiarioService {

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  adicionar(texto: any): Observable<any> {
    return this.http.post<any>(`${this.api}/diario`, texto);
  }

  listar() : Observable<any>{
    return this.http.get<any>(`${this.api}/diario`);
  }
}
