import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmComponent } from './farm/farm.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'farm',
      component: FarmComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
