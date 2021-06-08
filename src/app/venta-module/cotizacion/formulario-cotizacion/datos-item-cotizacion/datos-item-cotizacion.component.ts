import { MessageService } from 'primeng/api';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/general/services/loader.service';
import { FormItemCotizacionComponent } from './form-item-cotizacion/form-item-cotizacion.component';
import { VentaCotizacionItemService } from 'src/app/venta-module/service/venta-cotizacion-item.service';
import { ListaItemCotizaKardexCotizacionComponent } from './lista-item-cotiza-kardex-cotizacion/lista-item-cotiza-kardex-cotizacion.component';


@Component({
  selector: 'app-datos-item-cotizacion',
  templateUrl: './datos-item-cotizacion.component.html',
  styleUrls: ['./datos-item-cotizacion.component.scss']
})
export class DatosItemCotizacionComponent implements OnInit {

  //titulo
  modulo: string = "Producto";

  //formularios
  id: string = "";
  id_almacen: string = "";

  //componentes
  @ViewChild('cot') cot!: ListaItemCotizaKardexCotizacionComponent;
  //emitir datos
  @Output() respform = new EventEmitter();

  constructor(
    private messageService: MessageService,
    private service: VentaCotizacionItemService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
  }

  respformI(event: any) {
    if (event.tipo == 'crear') {
      if (event.success) {
        this.cot.loadDataList();
      }
    }
    if (event.tipo == 'editar') {
      if (event.success) {
        this.cot.loadDataList();
      }
    }
    if (event.tipo == 'eliminar') {
      if (event.success) {
        this.cot.loadDataList();
      }
    }
  }
  cargarTabla(id: string, id_alamcen: string) {
    this.id = id;
    this.id_almacen = id_alamcen;
    this.loaderService.hide();
  }

  guardar(tipo: any) {
    /* if (this.listaTabla.length > 0) {
       this.respform.emit({ tipo: 'guardar-datos-item-entrada', success: true });
     } else {
       this.messageService.add({ severity: 'warn', summary: this.modulo, detail: 'No tiene ningun item registrado.' });
     }*/
  }
}