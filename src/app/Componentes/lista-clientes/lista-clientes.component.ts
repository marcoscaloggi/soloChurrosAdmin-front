import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../Interfaces/Cliente'
@Component({
  selector: 'lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {
  clientes=[];

  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    this._http.get('http://127.0.0.1:8000/api/clientes/').
      subscribe((datos: any[]) => this.clientes = datos)
  }

}
