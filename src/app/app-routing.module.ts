import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomAuthGuard } from './commonService/auth-guard.guard';
import { PageNotFoundComponent } from './PageNotFound/pageNotFound.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    canLoad:[CustomAuthGuard]
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
