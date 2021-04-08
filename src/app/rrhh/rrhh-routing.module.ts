import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Inicio'
  },
  children: [
    {
      path: 'reporte-marcado',
      component: InicioComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }
