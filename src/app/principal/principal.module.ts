import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { VistaInicioComponent } from './vista-inicio/vista-inicio.component';
import { NotificacionComponent } from './notificacion/notificacion.component';



@NgModule({
  declarations: [VistaInicioComponent,NotificacionComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
