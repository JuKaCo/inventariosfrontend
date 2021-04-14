import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinameModuleRoutingModule } from './liname-module-routing.module';
import { ListadoLinameComponent } from './listado-liname/listado-liname.component';


@NgModule({
  declarations: [ListadoLinameComponent],
  imports: [
    CommonModule,
    LinameModuleRoutingModule
  ]
})
export class LinameModuleModule { }
