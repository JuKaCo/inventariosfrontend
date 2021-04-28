import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './general/config-auth-config/auth.guard';
import { inicioComponent } from './general/inicio/inicio.component';
import { LoginComponent } from './general/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent,},
  { path: 'login', component: LoginComponent, },
  { 
    path: 'inicio', 
    component: inicioComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule)
      },
    ]
  },
  { 
    path: 'rrhh', 
    component: inicioComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./rrhh-module/rrhh-module.module').then(m => m.RrhhModule)
      },
    ]
  },
  { 
    path: 'administra', 
    component: inicioComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./administra-module/administra-module.module').then(m => m.AdministraModuleModule)
      },
    ]
  },
  { 
    path: 'entidad', 
    component: inicioComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./entidad-module/entidad-module.module').then(m => m.EntidadModuleModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
