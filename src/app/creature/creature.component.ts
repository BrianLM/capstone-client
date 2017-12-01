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
  pointsUsed: number = 0
  canEvolve: boolean
  confirmDestroy: boolean = false

  constructor(
    public router: Router,
    public creatureService: CreatureService
  ) {
    this.creatureService.creature$.subscribe(
      result => {
        this.creature = result
      }
    )
  }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home'])
    } else {
      this.pointsAvailable = JSON.parse(localStorage.getItem('stat_points'))
    }
  }

  spawn() {
    this.creatureService.createCreature()
      .subscribe(
        response => {
          localStorage.setItem('creature', JSON.stringify(JSON.parse(response['_body']).creature))
          this.router.navigate(['/home']).then(() => this.router.navigate(['/creature']))
        }
      )
  }

  getConfirmation() {
    this.confirmDestroy = !this.confirmDestroy
  }

  despawn() {
    this.creatureService.createCreature()
      .subscribe(
        response => {
          localStorage.removeItem('creature')
          this.router.navigate(['/home']).then(() => this.router.navigate(['/creature']))
        }
      )
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
