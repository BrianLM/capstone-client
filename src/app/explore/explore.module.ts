import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AreaComponent } from './area/area.component';
import { ExploreComponent } from './explore.component';
import { ExpRoutingModule} from './exp-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ExpRoutingModule
  ],
  declarations: [IndexComponent, AreaComponent, ExploreComponent]
})
export class ExploreModule { }
