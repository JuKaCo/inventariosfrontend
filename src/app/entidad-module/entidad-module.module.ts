import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';

import { EntidadModuleRoutingModule } from './entidad-module-routing.module';
import { ListadoProveedorComponent } from './proveedor/listado-provedor/listado-proveedor.component';
import { FormularioProveedorComponent } from './proveedor/formulario-proveedor/formulario-proveedor.component';


@NgModule({
  declarations: [
    ListadoProveedorComponent,
    FormularioProveedorComponent
  ],
  imports: [
    CommonModule,
    EntidadModuleRoutingModule,
    CardModule
  ]
})
export class EntidadModuleModule { }
