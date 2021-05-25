import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { AdministraDosificacionService } from 'src/app/administra-module/service/administra-dosificacion.service';

@Component({
  selector: 'app-listado-inactivo-dosificacion',
  templateUrl: './listado-inactivo-dosificacion.component.html',
  styleUrls: ['./listado-inactivo-dosificacion.component.scss']
})
export class ListadoInactivoDosificacionComponent implements OnInit {
  modulo = 'docificación inactiva';
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
    let dataTable = { 'indice': indice, 'limite': limite, 'filtro': filtro, 'estado': 0 };
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
  crear() {
    //this.frm.crear();
  }
  editar(data: any) {
    //this.frm.editar(data.id);
  }
  eliminar(event: Event, data: any) {
    //this.frm.eliminar(event, data.id);
  }
  ver(data: any) {
    this.respform.emit({ tipo: 'ver', success: true ,data:data});
  }
  resetTable(){
    this.dt.reset();
  }

}
