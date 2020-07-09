import { Component, OnInit } from '@angular/core';

import { CargarClientesService } from 'src/app/Servicios/cargar-clientes.service';
import{Cliente} from 'src/app/Interfaces/Cliente';



@Component({
  selector: 'form-add-cliente',
  templateUrl: './form-ingreso-cliente.component.html',
  styleUrls: ['./form-ingreso-cliente.component.scss']
})


export class FormIngresoClienteComponent implements OnInit {
  clientes:Cliente[]=[];

  constructor(private _cargarClientes:CargarClientesService) { }

  ngOnInit(): void {
this._cargarClientes.getClientes().subscribe(
  (clientes:Cliente[])=>{console.log(clientes);
    this.clientes=clientes;
  }
)

  }

}
