import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { LiveComponent } from './main/live/live.component';
import { OverviewComponent } from './main/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LiveComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
