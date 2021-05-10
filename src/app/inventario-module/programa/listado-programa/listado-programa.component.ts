import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { InventarioProgramaService } from '../../service/inventario-programa.service';
import { FormularioProgramaComponent } from '../formulario-programa/formulario-programa.component';


@Component({
  selector: 'app-listado-programa',
  templateUrl: './listado-programa.component.html',
  styleUrls: ['./listado-programa.component.scss']
})
export class ListadoProgramaComponent implements OnInit {
//titulo
modulo: string = "Proveedor";

//formularios

//tabla
@ViewChild('dt') dt!: Table;
totalRecords: number = 0;
loading: boolean = true;
rows: number = 10;
first: number = 0;
listaTabla: any = [];


//componentes
@ViewChild('frm') frm!: FormularioProgramaComponent;
constructor(
  private messageService: MessageService,
  private service: InventarioProgramaService,
) {}

ngOnInit(): void {
}

crear() {
  this.frm.crear();
}
editar(data: any) {
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
  this.service.getLista(dataTable).subscribe(response => {
    if (response.success) {
      this.listaTabla = response.data.resultados;
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
      this.resetTable();
    }
  }
  if (event.tipo == 'editar') {
    if (event.success) {
      this.resetTable();
    }
  }
  if (event.tipo == 'eliminar') {
    if (event.success) {
      this.resetTable();
    }
  }
}
}