import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  adicionar(venda: any): Observable<any> {
    return this.http.post<any>(`${this.api}/vendas`, venda);
  }

  listar() : Observable<any>{
    return this.http.get<any>(`${this.api}/vendas`);
  }

  listarClientes() : Observable<any>{
    return this.http.get<any>(`${this.api}/clientes`);
  }

  listarProdutos() : Observable<any>{
    return this.http.get<any>(`${this.api}/produtos`);
  }
}
