import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreatureService } from '../services/creature/creature.service'

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css']
})
export class CreatureComponent implements OnInit {
  creature: any
  pointsAvailable: any
  canAllot: string = ''
  statBase: any = null
  constructor(
    public router: Router,
    public creatureService: CreatureService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home'])
    } else {
      this.creature = JSON.parse(localStorage.getItem('creature'))
      this.pointsAvailable = JSON.parse(localStorage.getItem('user_profile')).stat_points
    }
  }
  allocate(stat) {
    this.canAllot = stat
    if (this.pointsAvailable > 0) {
      if (this.statBase === null) {
        this.statBase = this.creature[`c_${stat}`]
      }
      this.creature[`c_${stat}`]++
      this.pointsAvailable--
    }
  }
  remove(stat) {
    this.creature[`c_${stat}`]--
    if (this.statBase < this.creature[`c_${stat}`]) {
      this.pointsAvailable++
    } else {
      this.pointsAvailable++
      this.statBase = null
      this.canAllot = ''
    }
  }
}
