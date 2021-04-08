import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng
import {CardModule} from 'primeng/card';
import {PanelMenuModule} from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';


import { RrhhRoutingModule } from './rrhh-routing.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule,
    CardModule,
    PanelMenuModule,
    BreadcrumbModule
  ]
})
export class RrhhModule { }
