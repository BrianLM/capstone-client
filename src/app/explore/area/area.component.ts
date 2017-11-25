import { Component, OnInit } from '@angular/core';
import { ExploreComponent } from '../explore.component'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(
    public where: ExploreComponent
  ) { }

  ngOnInit() {
  }

}
