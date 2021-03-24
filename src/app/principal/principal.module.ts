import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { VistaInicioComponent } from './vista-inicio/vista-inicio.component';


@NgModule({
  declarations: [VistaInicioComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
