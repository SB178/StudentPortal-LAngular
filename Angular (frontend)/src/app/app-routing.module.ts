import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LoginguardService } from './Components/login/loginguard.service';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { ForbiddenComponent } from './Modules/forbidden/forbidden.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [LoginguardService],
    component: DashboardComponent,
    loadChildren: () =>
      import('./Modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
