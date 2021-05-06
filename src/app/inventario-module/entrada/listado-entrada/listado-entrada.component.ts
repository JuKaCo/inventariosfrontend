import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioProductoService } from '../../service/inventario-producto.service';
import { FormularioEntradaComponent } from '../formulario-entrada/formulario-entrada.component';

@Component({
  selector: 'app-listado-entrada',
  templateUrl: './listado-entrada.component.html',
  styleUrls: ['./listado-entrada.component.scss']
})
export class ListadoEntradaComponent implements OnInit {
//titulo
modulo: string = "Producto";

//formularios

//tabla
@ViewChild('dt') dt!: Table;
totalRecords: number = 0;
loading: boolean = true;
rows: number = 10;
first: number = 0;
listaTabla: any = [];
viewTable: boolean = true;


//componentes
@ViewChild('frm') frm!: FormularioEntradaComponent;
constructor(
  private messageService: MessageService,
  private entidadService: InventarioProductoService,
) { }

ngOnInit(): void {
}

crear() {
  this.viewTable = false;
  this.frm.crear();
}
editar(data: any) {
  this.viewTable = false;
  this.frm.editar(data.id);
}
eliminar(event: Event, data: any) {
  this.frm.eliminar(event, data.id);
}
ver(data: any) {
  this.frm.ver(data.id);
}

loadData(event: any) {
  let indice = event.first;
  let limite = event.rows;
  let filtro = "";
  if (event.globalFilter?.value != undefined) {
    filtro = event.globalFilter.value;
  }
  this.loading = true;
  this.listaTabla = [];
  let dataTable = { 'indice': indice, 'limite': limite, 'filtro': filtro };
  this.entidadService.getLista(dataTable).subscribe(response => {
    if (response.success) {
      this.listaTabla=[];
      //this.listaTabla = response.data.resultados;
      this.totalRecords = response.data.total;
      this.loading = false;
    }
  },
    error => {
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
    });
}

resetTable() {
  this.dt.reset();
}
//emiter de formulario para ver respuesta y actulizar tabla
respform(event: any) {
  if (event.tipo == 'crear') {
    if (event.success) {
      this.viewTable=true;
      this.resetTable();
    }
  }
  if (event.tipo == 'editar') {
    if (event.success) {
      this.viewTable=true;
      this.resetTable();
    }
  }
  if (event.tipo == 'eliminar') {
    if (event.success) {
      this.resetTable();
    }
  }
  if(event.tipo=='cerrar'){
    if (event.success) {
      this.viewTable=true;
    }
  }
}
}