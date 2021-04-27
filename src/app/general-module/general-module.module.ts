import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModuleRoutingModule } from './general-module-routing.module';
import { MesajeFormErrorComponent } from './mesaje-form-error/mesaje-form-error.component';
import { ControlAccesoDirective } from './directivas/control-acceso/control-acceso.directive';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { BreadcrumbGeneralComponent } from './breadcrumb-general/breadcrumb-general.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@NgModule({
  declarations: [
    MesajeFormErrorComponent,
    ControlAccesoDirective,
    NotificacionComponent,
    BreadcrumbGeneralComponent
  ],
  imports: [
    CommonModule,
    GeneralModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
  ],
  exports: [
    MesajeFormErrorComponent,
    ControlAccesoDirective,
    NotificacionComponent,
    BreadcrumbGeneralComponent

  ]
})
export class GeneralModuleModule { }