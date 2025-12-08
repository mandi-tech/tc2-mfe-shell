import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthGuard } from './auth.guard';
import { loadRemoteModule } from '@angular-architects/module-federation';

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
      loadRemoteModule({
        type: 'module',
        remoteEntry:
          (window as any).__REMOTE_ENTRIES__?.loginApp ||
          'http://localhost:4201/remoteEntry.js',
        exposedModule: './LoginModule',
      }).then((m) => m.LoginModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry:
          (window as any).__REMOTE_ENTRIES__?.mainApp ||
          'http://localhost:4202/remoteEntry.js',
        exposedModule: './InicioModule',
      }).then((m) => m.InicioModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
