import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../general/config-auth-config/auth.guard';
import { ListadoDosificacionComponent } from './dosificacion/listado-dosificacion/listado-dosificacion.component';
import { ListadoLinadimeComponent } from './linadime/listado-linadime/listado-linadime.component';
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
      canActivate: [AuthGuard],
    },
    {
      path: 'linadime',
      component: ListadoLinadimeComponent,
      canActivate: [AuthGuard],
    },
    {
      path:'dosificacion',
      component: ListadoDosificacionComponent,
      canActivate: [AuthGuard],
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministraModuleRoutingModule { }
