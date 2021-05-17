import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormularioEntradaComponent } from '../formulario-entrada/formulario-entrada.component';
import { InventarioEntradaService } from '../../service/inventario-entrada.service';
import { ViewEntradaItemEntradaComponent } from '../view-entrada-item-entrada/view-entrada-item-entrada.component';

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
  //ver
  verDatos:boolean=false;
  @ViewChild('ver') verD!: ViewEntradaItemEntradaComponent;

  //componentes
  @ViewChild('frm') frm!: FormularioEntradaComponent;
  constructor(
    private messageService: MessageService,
    private service: InventarioEntradaService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  crear() {
      this.viewTable = false;
      this.frm.crear();
      //this.cdr.detectChanges();
  }
  editar(data: any) {
    this.viewTable = false;
    this.frm.editar(data.id);
  }
  eliminar(event: Event, data: any) {
    this.frm.eliminar(event, data.id);
  }
  ver(data: any) {
    this.verDatos=true;
    this.viewTable = false;
    this.cdr.detectChanges();
    this.verD.ver(data.id);
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
          this.cdr.detectChanges();
      }
    }
  }
  getNotaIngreso(id:string){
    this.messageService.add({ severity: 'info', summary: this.modulo, detail: 'Icnicia descarga de documento.' });
    this.service.getReporteNotaIngreso(id).subscribe(response => {
      let blob: any = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se genero correctamentente el documento.' });
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'No se pudo generar el documento.' });
      });
  }
}