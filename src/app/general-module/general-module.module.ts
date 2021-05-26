import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModuleRoutingModule } from './general-module-routing.module';
import { MesajeFormErrorComponent } from './mesaje-form-error/mesaje-form-error.component';
import { ControlAccesoDirective } from './directivas/control-acceso/control-acceso.directive';
import { ControlAccesoPrivilegioDirective} from './directivas/control-acceso-privilegio/control-acceso-privilegio.directive';
import { BreadcrumbGeneralComponent } from './breadcrumb-general/breadcrumb-general.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@NgModule({
  declarations: [
    MesajeFormErrorComponent,
    ControlAccesoDirective,
    ControlAccesoPrivilegioDirective,
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
    ControlAccesoPrivilegioDirective,
    BreadcrumbGeneralComponent

  ]
})
export class GeneralModuleModule { }