import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LevelsService } from '../services/levels/levels.service'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  user_profile: any

  neededToLevel: any
  maxEnergy: any
  constructor(
    public router: Router,
    public levelService: LevelsService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home'])
    } else {
      this.user_profile = JSON.parse(localStorage.getItem('user_profile'))
      this.levelService.getLevels()
        .subscribe(
          response => {
            let level = JSON.parse(response['_body']).level
            this.neededToLevel = level.required
            this.maxEnergy = level.energy
          }
        )
    }
  }
}
