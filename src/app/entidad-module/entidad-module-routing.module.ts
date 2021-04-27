import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../general/config-auth-config/auth.guard';
import { ListadoClienteComponent } from './cliente/listado-cliente/listado-cliente.component';
import { ListadoProveedorComponent } from './proveedor/listado-provedor/listado-proveedor.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Inicio'
  },
  children: [
    {
      path: 'provedores',
      component: ListadoProveedorComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'clientes',
      component: ListadoClienteComponent,
      canActivate: [AuthGuard],
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadModuleRoutingModule { }
