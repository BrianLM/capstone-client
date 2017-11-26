import { Component, OnInit } from '@angular/core';
import { ExploreComponent } from '../explore.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(
    public where: ExploreComponent,
    public router: Router
  ) { }

  ngOnInit() {
    if (!this.where.area) {
      this.router.navigate(['/home'])
    }
  }

}
