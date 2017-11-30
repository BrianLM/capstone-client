import { Component, OnInit, NgZone, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { CreatureService } from '../services/creature/creature.service'
import { ProfileService } from '../services/profile/profile.service'

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css']
})
export class CreatureComponent implements OnInit, OnChanges {
  creature: any
  pointsAvailable: any
  canAllot: string = ''
  statBase: any = null
  pointsUsed: number = 0

  storeCopy: any

  canEvolve: boolean
  constructor(
    public router: Router,
    public creatureService: CreatureService,
    public ux: ProfileService,
    public zone: NgZone
  ) {
    this.creatureService.creature$.subscribe(
      result => {
        this.creature = result
      }
    )
  }

  ngOnChanges() {

  }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home'])
    } else {
      this.pointsAvailable = JSON.parse(localStorage.getItem('stat_points'))
    }
  }

  // createState() {
  //   // let creature = JSON.parse(localStorage.getItem('creature'))
  //   //
  //   // this.canEvolve = creature.c_hp === creature.m_hp &&
  //   //                  creature.c_def === creature.m_def &&
  //   //                  creature.c_dex === creature.m_dex &&
  //   //                  creature.c_str === creature.m_str &&
  //   //                  creature.c_spd === creature.m_spd &&
  //   //                  creature.c_sig === creature.m_sig &&
  //   //                  creature.c_int === creature.m_int
  //   // this.creature = creature
  // }

  allocate(stat) {
    this.canAllot = stat
    if (this.pointsAvailable > 0) {
      if (this.statBase === null) {
        this.statBase = this.creature[`c_${stat}`]
      }
      this.creature[`c_${stat}`]++
      this.pointsUsed++
      this.pointsAvailable--
    }
  }

  remove(stat) {
    this.creature[`c_${stat}`]--
    if (this.statBase < this.creature[`c_${stat}`]) {
      this.pointsAvailable++
      this.pointsUsed--
    } else {
      this.pointsUsed--
      this.pointsAvailable++
      this.statBase = null
      this.canAllot = ''
    }
  }

  makeChange() {
    this.creatureService.sendStatRequest(`c_${this.canAllot}`, this.pointsUsed)
      .subscribe(
        response => {
          localStorage.setItem('creature', JSON.stringify(JSON.parse(response['_body']).creature))
          this.router.navigate(['/home']).then(() => this.router.navigate(['/creature']))
        }
      )
  }

  evolve() {
    this.creatureService.sendEvolveRequest()
      .subscribe(
        response => {
          localStorage.setItem('creature', JSON.stringify(JSON.parse(response['_body']).creature))
          this.router.navigate(['/home']).then(() => this.router.navigate(['/creature']))
        }
      )
  }
}
