import { VendasService } from './../../services/vendas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas-cadastro',
  templateUrl: './vendas-cadastro.component.html',
  styleUrls: ['./vendas-cadastro.component.css']
})
export class VendasCadastroComponent implements OnInit {

  clientes: Array<any>;

  constructor(private vendaService:VendasService) { }

  ngOnInit() {
    this.vendaService.listarClientes().subscribe(
      (response)  => this.clientes = response
      );
  }

}
