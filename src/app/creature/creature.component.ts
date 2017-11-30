import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreatureService } from '../services/creature/creature.service'
import { ProfileService } from '../services/profile/profile.service'

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
  pointsUsed: number = 0

  canEvolve: boolean
  constructor(
    public router: Router,
    public creatureService: CreatureService,
    public ux: ProfileService
  ) {  }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home'])
    } else {
      this.createState()
    }
  }

  createState() {
    let creature = JSON.parse(localStorage.getItem('creature'))
    this.pointsAvailable = JSON.parse(localStorage.getItem('stat_points'))
    this.canEvolve = creature.c_hp === creature.m_hp &&
                     creature.c_def === creature.m_def &&
                     creature.c_dex === creature.m_dex &&
                     creature.c_str === creature.m_str &&
                     creature.c_spd === creature.m_spd &&
                     creature.c_sig === creature.m_sig &&
                     creature.c_int === creature.m_int
    this.creature = creature
  }

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
          this.ux.requestProfile()
          .subscribe(
            response => {
              const user = JSON.parse(response['_body']).user
              for (let key in user) {
                if(typeof user[key] === 'object') {
                  localStorage.setItem(key, JSON.stringify(user[key]))
                } else {
                  localStorage.setItem(key, user[key])
                }
              }
              this.router.navigate(['/home']).then(() => this.router.navigate(['/creature']))
            }
          )
        }
      )
  }

  evolve() {
    this.creatureService.sendEvolveRequest()
      .subscribe(
        response => {
          this.ux.requestProfile()
          .subscribe(
            response => {
              const user = JSON.parse(response['_body']).user
              for (let key in user) {
                if(typeof user[key] === 'object') {
                  localStorage.setItem(key, JSON.stringify(user[key]))
                } else {
                  localStorage.setItem(key, user[key])
                }
              }
              this.router.navigate(['/home']).then(() => this.router.navigate(['/creature']))
            }
          )
        }
      )
  }
}
