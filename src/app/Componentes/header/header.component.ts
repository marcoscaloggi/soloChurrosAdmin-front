import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
dropLeft:boolean=false;
adminLista:boolean=false;


  constructor() { }

  ngOnInit(): void {
  
  }

}
