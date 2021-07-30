import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Synth1Component } from './synth1/synth1.component';
import { Synth2Component } from './synth2/synth2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Synth1Component,
    Synth2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
