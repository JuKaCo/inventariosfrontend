import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AdministraDosificacionService } from 'src/app/administra-module/service/administra-dosificacion.service';

@Component({
  selector: 'app-listado-activo-dosificacion',
  templateUrl: './listado-activo-dosificacion.component.html',
  styleUrls: ['./listado-activo-dosificacion.component.scss']
})
export class ListadoActivoDosificacionComponent implements OnInit {
  modulo = 'docificación activa';
  //tabla
  @ViewChild('dt') dt!: Table;
  totalRecords: number = 0;
  loading: boolean = true;
  rows: number = 10;
  first: number = 0;
  listaTabla: any = [];
  //emitir datos
  @Output() respform = new EventEmitter();
  constructor(
    private messageService: MessageService,
    private service: AdministraDosificacionService,
  ) { }

  loadData(event: any) {
    let indice = event.first;
    let limite = event.rows;
    let filtro = "";
    if (event.globalFilter?.value != undefined) {
      filtro = event.globalFilter.value;
    }
    this.loading = true;
    this.listaTabla = [];
    let dataTable = { 'indice': indice, 'limite': limite, 'filtro': filtro, 'estado': 1 };
    this.service.getLista(dataTable).subscribe(response => {
      if (response.success) {
        this.listaTabla = response.data.resultados;
        this.totalRecords = response.data.total;
        this.loading = false;
      }else{
        this.listaTabla =[];
        this.loading = false;
        this.totalRecords=0;
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
      });
  }

  ngOnInit(): void {
  }
  editar(data: any) {
    this.respform.emit({ tipo: 'editarFrm', success: true ,data:data, event:event});
  }

  eliminar(event: any, data: any) {
    this.respform.emit({ tipo: 'eliminarConfirm', success: true ,data:data, event:event});
  }

  ver(data: any) {
    this.respform.emit({ tipo: 'ver', success: true ,data:data});
  }

  resetTable(){
    this.dt.reset();
  }
}
