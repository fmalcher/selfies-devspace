import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfieGridComponent } from './selfie-grid/selfie-grid.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {
    path: '',
    component: SelfieGridComponent,
    pathMatch: 'full'
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class SelfiesDevspaceRoutingModule { }
