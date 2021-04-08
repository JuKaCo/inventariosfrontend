import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './general/config-auth-config/auth.guard';
import { IncioComponent } from './general/incio/incio.component';
import { LoginComponent } from './general/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, },
  { 
    path: 'incio', 
    component: IncioComponent, 
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
    component: IncioComponent, 
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./rrhh/rrhh.module').then(m => m.RrhhModule)
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
