import { Component, OnInit, ViewChild } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { AdministraDosificacionService } from '../../service/administra-dosificacion.service';
import { FormularioDosificacionComponent } from '../formulario-dosificacion/formulario-dosificacion.component';
import { ListadoActivoDosificacionComponent } from './listado-activo-dosificacion/listado-activo-dosificacion.component';
import { ListadoInactivoDosificacionComponent } from './listado-inactivo-dosificacion/listado-inactivo-dosificacion.component';

@Component({
  selector: 'app-listado-dosificacion',
  templateUrl: './listado-dosificacion.component.html',
  styleUrls: ['./listado-dosificacion.component.scss']
})
export class ListadoDosificacionComponent implements OnInit {
  //titulo
  modulo: string = "Cliente";

  //general
  index: number = 0;


  //componentes
  @ViewChild('frm') frm!: FormularioDosificacionComponent;
  @ViewChild('tab1') tab1!: ListadoActivoDosificacionComponent;
  @ViewChild('tab2') tab2!: ListadoInactivoDosificacionComponent;
  constructor(
    private messageService: MessageService,
    private service: AdministraDosificacionService,
  ) { }

  ngOnInit(): void {
  }

  crear() {
    this.frm.crear();
  }

  resetTable(index: any) {
  }
  //emiter de formulario para ver respuesta y actulizar tabla
  respform(event: any) {
    if (event.tipo == 'crear') {
      if (event.success) {
        this.handleChange({ index: 0 });
      }
    }
    if (event.tipo == 'editar') {
      if (event.success) {
        this.handleChange({ index: 0 });
      }
    }
    if (event.tipo == 'editarFrm') {
      if (event.success) {
        this.frm.editar(event.data.id);
      }
    }
    if (event.tipo == 'eliminarConfirm') {
      if (event.success) {
        this.frm.eliminar(event.event, event.data.id);
      }
    }
    if (event.tipo == 'eliminar') {
      if (event.success) {
        this.handleChange({ index: 0 });
      }
    }
    if (event.tipo == 'ver') {
      if (event.success) {
        this.frm.ver(event.data.id);
      }
    }
  }
  handleChange(event: any) {
    if (event.index == 0) {
      this.tab1.resetTable();
    }
    if (event.index == 1) {
      this.tab2.resetTable();
    }
  }
}