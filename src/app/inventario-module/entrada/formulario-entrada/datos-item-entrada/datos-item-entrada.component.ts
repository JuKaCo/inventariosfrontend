import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormItemEntradaComponent } from './form-item-entrada/form-item-entrada.component';
import { LoaderService } from 'src/app/general/services/loader.service';
import { InventarioEntradaItemService } from 'src/app/inventario-module/service/inventario-entrada-item.service';

@Component({
  selector: 'app-datos-item-entrada',
  templateUrl: './datos-item-entrada.component.html',
  styleUrls: ['./datos-item-entrada.component.scss']
})
export class DatosItemEntradaComponent implements OnInit {
  //titulo
  modulo: string = "Producto";

  //formularios
  id: string = "";

  //tabla
  @ViewChild('dt') dt!: Table;
  totalRecords: number = 0;
  loading: boolean = true;
  rows: number = 10;
  first: number = 0;
  listaTabla: any = [];
  viewTable: boolean = true;


  //componentes
  @ViewChild('frm') frm!: FormItemEntradaComponent;
  //emitir datos
  @Output() respform = new EventEmitter();

  constructor(
    private messageService: MessageService,
    private service: InventarioEntradaItemService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
  }

  crear() {
    this.viewTable = false;
    this.frm.id = this.id;
    this.frm.crear();

  }
  editar(data: any) {
    this.viewTable = false;
    this.frm.id = this.id;
    this.frm.editar(data.id);
  }
  eliminar(event: Event, data: any) {
    this.frm.eliminar(event, data.id);
  }
  ver(data: any) {
    this.frm.ver(data.id);
  }

  loadData(event: any): any {
    let indice = event.first;
    let limite = event.rows;
    let filtro = "";
    if (event.globalFilter?.value != undefined) {
      filtro = event.globalFilter.value;
    }
    this.loading = true;
    this.listaTabla = [];
    let dataTable = { 'indice': indice, 'limite': limite, 'filtro': filtro };
    console.log('¡¡¡¡',this.id);
    if (this.id == '') {
      this.loaderService.hide();
      return null;
    }
    this.service.getLista(dataTable, this.id).subscribe(response => {
      if (response.success) {
        this.listaTabla = [];
        this.listaTabla = response.data.resultados;
        this.totalRecords = response.data.total;
        this.loading = false;
        this.loaderService.hide();
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
      });
  }

  resetTable() {
    this.dt.reset();
  }
  cargarTabla(id: string) {
    this.id = id;
    console.log('carga',this.id);
    this.loadData({
      first: 0,
      rows: 10,
      globalFilter:{value: ''}
    });
  }
  //emiter de formulario para ver respuesta y actulizar tabla
  respformI(event: any) {
    if (event.tipo == 'crear') {
      if (event.success) {
        this.viewTable = true;
        this.resetTable();
      }
    }
    if (event.tipo == 'editar') {
      if (event.success) {
        this.viewTable = true;
        this.resetTable();
      }
    }
    if (event.tipo == 'eliminar') {
      if (event.success) {
        this.resetTable();
      }
    }
    if (event.tipo == 'cerrar') {
      if (event.success) {
        this.viewTable = true;
      }
    }
  }

  guardar(tipo: any) {
    if (this.listaTabla.length > 0) {
      this.respform.emit({ tipo: 'guardar-datos-item-entrada', success: true });
    } else {
      this.messageService.add({ severity: 'warn', summary: this.modulo, detail: 'No tiene ningun item registrado.' });
    }

  }
}