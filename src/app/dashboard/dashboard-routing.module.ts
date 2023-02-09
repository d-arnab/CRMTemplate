import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyTaskComponent } from './components/daily-task/daily-task.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'',
    component: WrapperComponent,
    children:[
        {
            path:'dashboard',
            component: DashboardComponent
        },
        {
          path: 'dailyTask',
          component: DailyTaskComponent
        }
    ]
  },
  {
    path:'',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
