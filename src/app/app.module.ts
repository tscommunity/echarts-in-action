import { BarChartsModule } from './charts/bar/bar-charts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
