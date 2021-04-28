import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioModuleRoutingModule } from './inventario-module-routing.module';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { FormularioProductoComponent } from './producto/formulario-producto/formulario-producto.component';


@NgModule({
  declarations: [
    ListadoProductoComponent,
    FormularioProductoComponent
  ],
  imports: [
    CommonModule,
    InventarioModuleRoutingModule
  ]
})
export class InventarioModuleModule { }
