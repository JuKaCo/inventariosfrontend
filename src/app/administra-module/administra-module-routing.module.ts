import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoLinadimeComponent } from './linadime/listado-liname/listado-linadime.component';
import { ListadoLinameComponent } from './liname/listado-liname/listado-liname.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Inicio'
  },
  children: [
    {
      path: 'liname',
      component: ListadoLinameComponent,
    },
    {
      path: 'linadime',
      component: ListadoLinadimeComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministraModuleRoutingModule { }
