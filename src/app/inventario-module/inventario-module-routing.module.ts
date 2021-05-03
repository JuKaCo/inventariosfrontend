import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../general/config-auth-config/auth.guard';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { ListadoRegionalComponent } from './regional/listado-regional/listado-regional.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Inventario'
  },
  children: [
    {
      path: 'productos',
      component: ListadoProductoComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'regionales',
      component: ListadoRegionalComponent,
      canActivate: [AuthGuard],
    },
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioModuleRoutingModule { }
