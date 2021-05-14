import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { InventarioEntradaItemService } from '../../service/inventario-entrada-item.service';
import { InventarioEntradaService } from '../../service/inventario-entrada.service';
import { Table } from 'primeng/table/table';

@Component({
  selector: 'app-view-entrada-item-entrada',
  templateUrl: './view-entrada-item-entrada.component.html',
  styleUrls: ['./view-entrada-item-entrada.component.scss']
})
export class ViewEntradaItemEntradaComponent implements OnInit {
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
    private service: InventarioEntradaService,
    private serviceItem: InventarioEntradaItemService,
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
    console.log('¡¡¡¡',this.id);
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
    console.log('carga',this.id);
    this.loadData({
      first: 0,
      rows: 10,
      globalFilter:{value: ''}
    });
  }

}
