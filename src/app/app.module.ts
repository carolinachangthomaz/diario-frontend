import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , LOCALE_ID} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import localPt from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';


import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { VendasListaComponent } from './components/vendas-lista/vendas-lista.component';
import { VendasCadastroComponent } from './components/vendas-cadastro/vendas-cadastro.component';

registerLocaleData(localPt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListaComponent,
    VendasCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue:'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
