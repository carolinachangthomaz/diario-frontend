import { DiarioService } from './../../services/diario.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-diario-cadastro',
  templateUrl: './diario-cadastro.component.html',
  styleUrls: ['./diario-cadastro.component.css']
})
export class DiarioCadastroComponent implements OnInit {

  texto = {};
 
  @Output() vendaSalva = new EventEmitter();

  constructor(private diarioService: DiarioService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  novaPalavra() {
    this.texto = {palavra : '' , obs : ''};
  }

  adicionar(frm: FormGroup){
    this.diarioService.adicionar(this.texto).subscribe(
      response  => 
      {
        frm.reset();
        this.novaPalavra();


        this.messageService.add({ severity: 'success' , detail: 'venda adicionada com sucesso'});
        this.vendaSalva.emit(response);
      });

}
}
