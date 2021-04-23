import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadModuleRoutingModule { }
