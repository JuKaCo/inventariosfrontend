import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModuleRoutingModule } from './general-module-routing.module';
import { MesajeFormErrorComponent } from './mesaje-form-error/mesaje-form-error.component';
import { ControlAccesoDirective } from './directivas/control-acceso/control-acceso.directive';
import { NotificacionComponent } from './notificacion/notificacion.component';


@NgModule({
  declarations: [
    MesajeFormErrorComponent,
    ControlAccesoDirective,
    NotificacionComponent
  ],
  imports: [
    CommonModule,
    GeneralModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    MesajeFormErrorComponent,
    ControlAccesoDirective,
    NotificacionComponent
  ]
})
export class GeneralModuleModule { }