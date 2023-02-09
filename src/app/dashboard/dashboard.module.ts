import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from '../dashboard/components/wrapper/wrapper.component';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';

import { MaterialModule } from './../material.module';
import { HeaderComponent } from '../dashboard/components/header/header.component';
import { OverviewComponent } from '../dashboard/components/overview/overview.component';

import { NgChartsModule } from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DailyTaskComponent } from './components/daily-task/daily-task.component';



@NgModule({
  declarations: [
    WrapperComponent,
    DashboardComponent,
    HeaderComponent,
    OverviewComponent,
    DailyTaskComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
