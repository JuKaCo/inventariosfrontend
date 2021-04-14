import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoLinameComponent } from './listado-liname/listado-liname.component';

const routes: Routes =  [{
  path: '',
  data: {
    title: 'Inicio'
  },
  children: [
    {
      path: 'listado',
      component: ListadoLinameComponent,
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinameModuleRoutingModule { }
