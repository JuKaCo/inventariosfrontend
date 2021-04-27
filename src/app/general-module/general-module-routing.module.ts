import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacionComponent } from './notificacion/notificacion.component';

const routes: Routes =  [{
  path: '',
  data: {
    title: 'Inicio'
  },
  children: [
    {
      path: 'notificacion',
      component: NotificacionComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralModuleRoutingModule { }
