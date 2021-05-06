import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../general/config-auth-config/auth.guard';
import { ListadoAlmacenComponent } from './almacen/listado-almacen/listado-almacen.component';
import { ListadoCompraComponent } from './compra/listado-compra/listado-compra.component';
import { ListadoEntradaComponent } from './entrada/listado-entrada/listado-entrada.component';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { ListadoProgramaComponent } from './programa/listado-programa/listado-programa.component';
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
    {
      path: 'programas',
      component: ListadoProgramaComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'almacenes',
      component: ListadoAlmacenComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'entradas',
      component: ListadoEntradaComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'compras',
      component: ListadoCompraComponent,
      canActivate: [AuthGuard],
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioModuleRoutingModule { }
