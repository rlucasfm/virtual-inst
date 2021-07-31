import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Synth1Component } from './synth1/synth1.component';
import { Synth2Component } from './synth2/synth2.component';
import { VolumeknobComponent } from './volumeknob/volumeknob.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Synth1Component,
    Synth2Component,
    VolumeknobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
