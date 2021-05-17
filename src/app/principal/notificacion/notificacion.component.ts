import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { NotificacionService } from '../service/notificacion.service';
import { Table } from 'primeng/table/table';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {
  //titulo
  modulo: string = "Proveedor";
   //tabla
   @ViewChild('dt') dt!: Table;
   totalRecords: number = 0;
   loading: boolean = true;
   rows: number = 10;
   first: number = 0;
   listaTabla: any = [];

  constructor( 
    private notificacionService: NotificacionService,
    private messageService: MessageService
  ) { }
  ngOnInit(): void {
  }
  resetTable() {
    this.dt.reset();
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
    this.notificacionService.getListaNotificacion(dataTable)
        .subscribe( response => {
          if (response.success) {
            this.listaTabla = response.data.resultados;
            this.totalRecords = response.data.total;
            this.loading = false;
          }

        }, error => {
          this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
        });
  }


  eliminaNotificacion(id: number){
    this.notificacionService.inactivaNotificacion(id)
      .subscribe(response => {
        if (response.success) {
          this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se realizo con exito' });
          this.resetTable();
        }
      }, error => {
        this.messageService.add({ severity: 'error', summary: error.message, detail: 'Error al consumir el servicio.' });
      });
  }

  cambiarConfirmacion(id: number) {
    this.notificacionService.confirmaNotificacion(id)
      .subscribe(response => {
        if (response.success) {
          this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se realizo con exito' });
          this.resetTable();
        }
      }, error => {
        this.messageService.add({ severity: 'error', summary: error.message, detail: 'Error al consumir el servicio.' });
      });
  }

}
