import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { Synth1Component } from './synth1/synth1.component';
import { Synth2Component } from './synth2/synth2.component';

const routes: Routes = [
  { path: 'synth-1', component: Synth1Component },
  { path: 'synth-2', component: Synth2Component },
  { path: '', component: InicialComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
