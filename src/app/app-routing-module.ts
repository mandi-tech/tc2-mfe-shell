import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../../../login-app/src/app/login/login-module').then((m) => m.LoginModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('../../../main-app/src/app/inicio/inicio-module').then((m) => m.InicioModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
