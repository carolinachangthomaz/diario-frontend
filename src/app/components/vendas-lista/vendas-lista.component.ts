import { VendasService } from './../../services/vendas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas-lista',
  templateUrl: './vendas-lista.component.html',
  styleUrls: ['./vendas-lista.component.css']
})
export class VendasListaComponent implements OnInit {

  pedidos: Array<any>;
  constructor(private vendaService:VendasService) { }

  ngOnInit() {
    this.vendaService.listar().subscribe(
      (response)  => this.pedidos = response
      );
  }

}
