import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewCotizacionItemCotizacionComponent } from '../../view-cotizacion-item-cotizacion/view-cotizacion-item-cotizacion.component';


@Component({
  selector: 'app-terminar-cotizacion',
  templateUrl: './terminar-cotizacion.component.html',
  styleUrls: ['./terminar-cotizacion.component.scss']
})
export class TerminarCotizacionComponent implements OnInit {

  //general
  id:string="";
  //vistas
  @ViewChild('ver') ver!: ViewCotizacionItemCotizacionComponent;

  constructor() { }

  ngOnInit(): void {
  }

  verDatos(id:string){
    this.id=id;
    this.ver.ver(id);

  }

}
