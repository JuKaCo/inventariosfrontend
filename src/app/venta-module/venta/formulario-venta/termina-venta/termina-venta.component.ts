import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewVentaItemVentaComponent } from '../../view-venta-item-venta/view-venta-item-venta.component';


@Component({
  selector: 'app-termina-venta',
  templateUrl: './termina-venta.component.html',
  styleUrls: ['./termina-venta.component.scss']
})
export class TerminaVentaComponent implements OnInit {

  //general
  id:string="";
  //vistas
  @ViewChild('ver') ver!: ViewVentaItemVentaComponent;

  constructor() { }

  ngOnInit(): void {
  }

  verDatos(id:string){
    this.id=id;
    this.ver.ver(id);

  }

}
