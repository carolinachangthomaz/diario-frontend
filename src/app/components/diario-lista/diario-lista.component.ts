import { filter } from 'rxjs/operators';
import { Diario } from './../../model/diario';
import { DiarioService } from './../../services/diario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-diario-lista',
  templateUrl: './diario-lista.component.html',
  styleUrls: ['./diario-lista.component.css']
})
export class DiarioListaComponent implements OnInit {

  diario: Diario[] ;
  
  constructor(private diarioService: DiarioService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.diarioService.listar().subscribe(
      (response)  => {
        this.diario = response
        //this.diario.sort(this.compare);
       }
      );
  }
 
  compare(a,b) {
    if (a.date > b.date)
      return -1;
    if (a.date < b.date)
      return 1;
    return 0;
  }

}
