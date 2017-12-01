import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  area = <any>{}
  areaComplete: boolean = false

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home'])
    }
    if (Object.keys(this.area).length === 0) {
      this.router.navigate(['/explore/index'])
    }
    if (JSON.parse(localStorage.getItem('exploration')).area) {
      this.router.navigate(['/explore/area'])
    }
  }
}
