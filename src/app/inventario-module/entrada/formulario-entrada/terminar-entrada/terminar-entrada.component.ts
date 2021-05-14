import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEntradaItemEntradaComponent } from '../../view-entrada-item-entrada/view-entrada-item-entrada.component';

@Component({
  selector: 'app-terminar-entrada',
  templateUrl: './terminar-entrada.component.html',
  styleUrls: ['./terminar-entrada.component.scss']
})
export class TerminarEntradaComponent implements OnInit {
  
  //general
  id:string="";
  //vistas
  @ViewChild('ver') ver!: ViewEntradaItemEntradaComponent;

  constructor() { }

  ngOnInit(): void {
  }

  verDatos(id:string){
    this.id=id;
    this.ver.ver(id);

  }

}
