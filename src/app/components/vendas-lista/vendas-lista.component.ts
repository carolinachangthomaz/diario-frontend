import { VendasService } from './../../services/vendas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas-lista',
  templateUrl: './vendas-lista.component.html',
  styleUrls: ['./vendas-lista.component.css']
})
export class VendasListaComponent implements OnInit {

  vendas: Array<any>;
  constructor(private vendaService:VendasService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.vendaService.listar().subscribe(
      (response)  => this.vendas = response
      );
  }

}
