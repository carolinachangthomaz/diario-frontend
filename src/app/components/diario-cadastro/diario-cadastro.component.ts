import { Diario } from './../../model/diario';
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

  diario: Diario[] ;
  texto = {};
  hoje: string;
  show: boolean = true;
  
 
  @Output() palavraSalva = new EventEmitter();

  constructor(private diarioService: DiarioService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.listarPalavras();

   
        this.fromJsonDate();
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
        var cadastro = new Diario();
        cadastro = response;

        console.log(cadastro.id);
        if(cadastro.id != null){
          this.messageService.add({ severity: 'success' , detail: 'Parabéns!!! Você aprendeu + 1 Palavra'});
          this.palavraSalva.emit(response);
           this.show = false;
        }else{
          this.messageService.add({ severity: 'warn' , detail: 'Iniciando o jogo de palavras'});
          this.palavraSalva.emit(response);
        }

       
        
      });
  }

  listarPalavras(){
    this.diarioService.listar().subscribe(
      (response)  => {
        this.diario = response
       
        this.findChoicesIn(this.diario);
        console.log(this.show);
      }
      );
 
  }

  fromJsonDate() {
    const bDate: Date = new Date();
    this.hoje = bDate.toLocaleString().substring(0, 10);  //Ignore time
  }

  findChoicesIn(list) {
    let show:boolean = true;
    let hoje = String(this.hoje);
    list.filter(function(i) {
        let date = String(i.date);
        date.indexOf(hoje);
       if(date === hoje){
        show = false;
       }
    });
    
    this.show = show;
  };
}
