import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModuleRoutingModule } from './general-module-routing.module';
import { MesajeFormErrorComponent } from './mesaje-form-error/mesaje-form-error.component';


@NgModule({
  declarations: [
    MesajeFormErrorComponent
  ],
  imports: [
    CommonModule,
    GeneralModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    MesajeFormErrorComponent
  ]
})
export class GeneralModuleModule { }