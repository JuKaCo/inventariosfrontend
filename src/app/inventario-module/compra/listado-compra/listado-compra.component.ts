import { Component, OnInit, ViewChild } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { InventarioCompraService } from '../../service/inventario-compra.service';
import { FormularioCompraComponent } from '../formulario-compra/formulario-compra.component';


@Component({
  selector: 'app-listado-compra',
  templateUrl: './listado-compra.component.html',
  styleUrls: ['./listado-compra.component.scss']
})
export class ListadoCompraComponent implements OnInit {
 //titulo
 modulo: string = "Compra";

 //formularios

 //tabla
 @ViewChild('dt') dt!: Table;
 totalRecords: number = 0;
 loading: boolean = true;
 rows: number = 10;
 first: number = 0;
 listaTabla: any = [];


 //componentes
 @ViewChild('frm') frm!: FormularioCompraComponent;
 constructor(
   private messageService: MessageService,
   private service: InventarioCompraService,
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
 cambiarEstado(evnt:any,dato:any,estado:any){
  this.frm.modificarEstado(evnt,dato.id,estado);
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
