import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { NgChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';
import { MokeHTTPRequestProvider } from './commonService/common-http-intercepeter.service';
import { CommonService } from './commonService/common.service';

import { PageNotFoundComponent } from './PageNotFound/pageNotFound.component'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [MokeHTTPRequestProvider, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
