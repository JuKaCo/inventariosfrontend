import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Table } from 'primeng/table/table';
import { VentaCotizacionItemService } from '../../service/venta-cotizacion-item.service';
import { VentaCotizacionService } from '../../service/venta-cotizacion.service';

@Component({
  selector: 'app-view-cotizacion-item-cotizacion',
  templateUrl: './view-cotizacion-item-cotizacion.component.html',
  styleUrls: ['./view-cotizacion-item-cotizacion.component.scss']
})
export class ViewCotizacionItemCotizacionComponent implements OnInit {
 //General
 header: string = "entrada";
 modulo: string = "Entrada";
 //datos entrada
 entrada:any={};
 //obserbable
 ver$!:Observable<any>;
 id:string="";

  //tabla
  @ViewChild('dt') dt!: Table;
  totalRecords: number = 0;
  loading: boolean = true;
  rows: number = 10;
  first: number = 0;
  listaTabla: any = [];
  viewTable: boolean = true;

 constructor(
   private service: VentaCotizacionService,
   private serviceItem: VentaCotizacionItemService,
   private messageService: MessageService
 ) { }

 ngOnInit(): void {
 }

 ver(id:string){
   this.id=id;
   this.ver$=this.service.getRegistro(id);
   this.ver$.subscribe(response => {
     if (response.success) {
       this.entrada=response.data;
       this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
     } else {
       this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
     }
   },
     error => {
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
     });
     this.cargarTabla(id);
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
   if (this.id == '') {
     return null;
   }
   this.serviceItem.getLista(dataTable, this.id).subscribe(response => {
     if (response.success) {
       this.listaTabla = [];
       this.listaTabla = response.data.resultados;
       this.totalRecords = response.data.total;
       this.loading = false;
     }
   },
     error => {
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
     });
 }

 cargarTabla(id: string) {
   this.id = id;
   this.loadData({
     first: 0,
     rows: 10,
     globalFilter:{value: ''}
   });
 }

}
