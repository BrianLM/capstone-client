import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from '../explore/index/index.component'
import { AreaComponent } from '../explore/area/area.component'
import { ExploreComponent } from '../explore/explore.component'

const routes: Routes = [
  {
    path: 'explore',
    component: ExploreComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'area',
        component: AreaComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class ExpRoutingModule { }
