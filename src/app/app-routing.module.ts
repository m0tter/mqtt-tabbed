import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseComponent } from './zones/house/house.component';
import { OutsideComponent } from './zones/outside/outside.component';


const routes: Routes = [
  { path: '', redirectTo: '/house', pathMatch: 'full' },
  { path: 'house', component: HouseComponent },
  { path: 'outside', component: OutsideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
