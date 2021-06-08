import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { VentaCotizacionItemService } from 'src/app/venta-module/service/venta-cotizacion-item.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-item-kardex-cotizacion',
  templateUrl: './lista-item-kardex-cotizacion.component.html',
  styleUrls: ['./lista-item-kardex-cotizacion.component.scss']
})
export class ListaItemKardexCotizacionComponent implements OnChanges {
  //datos generales
  @Input() id_almacen: string = "";
  @Input() id: string = "";
  @Output() respformI = new EventEmitter();

  loading: boolean = false;
  listaTabla: any = [];
  totalRecords: number = 0;
  modulo: string = "Kardex";
  buscar: string = "";
  rows: any = { code: '10', value: '10' };
  indice: number = 0;

  @ViewChild('dv') dv!: DataView;
  constructor(
    private service: VentaCotizacionItemService,
    private messageService: MessageService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.buscar = "";
    this.loadDataKardex({
      first: 0,
      rows: 10
    }, '');
  }

  loadDataKardex(event: any, bus: any): any {
    let indice;
    let limite = this.rows.value;
    let filtro = bus;

    if (event == 'texto' || event == 'rows') {
      indice = 0;
      indice = 0;
    } else {
      indice = event.first;
    }
    this.indice = indice;

    this.loading = true;
    this.listaTabla = [];
    let dataTable = { 'indice': indice, 'limite': limite, 'filtro': filtro };
    if (this.id_almacen == '') {
      return null;
    }
    this.service.getListaKardex(dataTable, this.id_almacen).subscribe(response => {
      if (response.success) {
        this.listaTabla = response.data.resultados;
        this.totalRecords = response.data.total;
        //this.totalRecords = 100;
        this.loading = false;
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
      });
  }
  respformFI(event: any){
    if (event.tipo == 'crear') {
      if (event.success) {
        this.respformI.emit({ tipo: 'crear', success: true });
      }
    }
  }
}
