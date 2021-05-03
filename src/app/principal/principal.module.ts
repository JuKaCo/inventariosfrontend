import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { VistaInicioComponent } from './vista-inicio/vista-inicio.component';
import { NotificacionComponent } from './notificacion/notificacion.component';

//primeng
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';



@NgModule({
  declarations: [VistaInicioComponent,NotificacionComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    TagModule
  ]
})
export class PrincipalModule { }
