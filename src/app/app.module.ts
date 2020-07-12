import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/******Angular Material*****/
import{MaterialModule} from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*****Componentes*****/
import { AppComponent } from './Componentes/App/app.component';
import { FormIngresoClienteComponent } from './Componentes/form-ingreso-cliente/form-ingreso-cliente.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { ListaClientesComponent } from './Componentes/lista-clientes/lista-clientes.component';
import { PaginaClientesComponent } from './Componentes/pagina-clientes/pagina-clientes.component';

@NgModule({
  
  declarations: [
    AppComponent,
    FormIngresoClienteComponent,
    HeaderComponent,
    ListaClientesComponent,
    PaginaClientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
