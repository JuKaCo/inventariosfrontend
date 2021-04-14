import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//primeng
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';


import { RrhhRoutingModule } from './rrhh-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { GeneralModuleModule } from '../general-module/general-module.module';

@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    GeneralModuleModule,
    RrhhRoutingModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[]
})
export class RrhhModule { }
