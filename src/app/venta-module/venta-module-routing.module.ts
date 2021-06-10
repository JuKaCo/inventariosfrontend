import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../general/config-auth-config/auth.guard';
import { ListadoCotizacionComponent } from './cotizacion/listado-cotizacion/listado-cotizacion.component';
import { ListadoVentaComponent } from './venta/listado-venta/listado-venta.component';

const routes: Routes =  [{
  path: '',
  data: {
    title: 'venta'
  },
  children: [
    {
      path: 'cotizaciones',
      component: ListadoCotizacionComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'ventas',
      component: ListadoVentaComponent,
      canActivate: [AuthGuard],
    }
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaModuleRoutingModule { }
