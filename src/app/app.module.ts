import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , LOCALE_ID} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import localPt from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule} from 'ng2-currency-mask';

import { MessageService } from 'primeng/components/common/messageservice';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';


import { AppComponent } from './app.component';
import { VendasListaComponent } from './components/vendas-lista/vendas-lista.component';
import { VendasCadastroComponent } from './components/vendas-cadastro/vendas-cadastro.component';
import { DiarioListaComponent } from './components/diario-lista/diario-lista.component';
import { DiarioCadastroComponent } from './components/diario-cadastro/diario-cadastro.component';

registerLocaleData(localPt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListaComponent,
    VendasCadastroComponent,
    DiarioListaComponent,
    DiarioCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    PanelModule,
    ButtonModule,
    GrowlModule,
    CurrencyMaskModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue:'pt'},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
