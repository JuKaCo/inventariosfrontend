import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModuleRoutingModule } from './general-module-routing.module';
import { MesajeFormErrorComponent } from './mesaje-form-error/mesaje-form-error.component';
import { ControlAccesoDirective } from './directivas/control-acceso/control-acceso.directive';


@NgModule({
  declarations: [
    MesajeFormErrorComponent,
    ControlAccesoDirective,
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
  ]
})
export class GeneralModuleModule { }