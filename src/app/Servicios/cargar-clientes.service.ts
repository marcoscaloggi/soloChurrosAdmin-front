import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente } from '../Interfaces/Cliente';
@Injectable({
  providedIn: 'root'
})
export class CargarClientesService {

  constructor(private _http:HttpClient) { }

  getClientes(){
    return this._http.get<Cliente[]>('https://jsonplaceholder.typicode.com/users')
  }
}
