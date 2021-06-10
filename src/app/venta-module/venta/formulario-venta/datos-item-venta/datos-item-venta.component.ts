import { MessageService } from 'primeng/api';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/general/services/loader.service';
import { VentaCotizacionItemService } from 'src/app/venta-module/service/venta-cotizacion-item.service';
import { ListaItemVentaKardexVentaComponent } from './lista-item-venta-kardex-venta/lista-item-venta-kardex-venta.component';


@Component({
  selector: 'app-datos-item-venta',
  templateUrl: './datos-item-venta.component.html',
  styleUrls: ['./datos-item-venta.component.scss']
})
export class DatosItemVentaComponent implements OnInit {

  //titulo
  modulo: string = "Producto";

  //formularios
  id: string = "";
  id_almacen: string = "";

  //componentes
  @ViewChild('cot') cot!: ListaItemVentaKardexVentaComponent;
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
   if (this.cot.listaTabla.length > 0) {
       this.respform.emit({ tipo: 'guardar-datos-item-entrada', success: true });
     } else {
       this.messageService.add({ severity: 'warn', summary: this.modulo, detail: 'No tiene ningun item registrado.' });
     }
  }
}