import { Component, OnInit } from '@angular/core';
import { ExploreComponent } from '../explore.component'
import { Router } from '@angular/router';

import { ExploreService } from '../../services/explore/explore.service'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  exploring: string
  inBattle: boolean
  maxDifficulty: number
  selectedDif: number
  energyRequired: number
  step: number = 0
  end: number = 0
  towards: string

  constructor(
    public where: ExploreComponent,
    public explore: ExploreService,
    public router: Router
  ) { }

  ngOnInit() {
    this.exploring = JSON.parse(localStorage.getItem('exploration')).area ? JSON.parse(localStorage.getItem('exploration')).area : false
    let areaKey
    if (!this.exploring) {
      if (!this.where.area.name ) {
        this.router.navigate(['/home'])
      } else {
        areaKey = `top_${this.where.area.name.substr(0,1)}`
      }
    } else {
      areaKey = `top_${this.exploring.substr(0,1)}`
      this.step = JSON.parse(localStorage.getItem('exploration')).step
      this.end = JSON.parse(localStorage.getItem('exploration')).end
      this.towards = ((this.step / this.end) * 100) + '%'
    }
    this.inBattle = JSON.parse(localStorage.getItem('encounter')) ? true : false
    this.maxDifficulty = JSON.parse(localStorage.getItem('exploration'))[areaKey]
    this.energyRequired = JSON.parse(localStorage.getItem('exploration')).dif ? (JSON.parse(localStorage.getItem('exploration')).dif / 10) + 1 : 1
    this.selectedDif = this.maxDifficulty + 1
  }

  difDecrease() {
    this.selectedDif--
  }

  difIncrease() {
    this.selectedDif++
  }

  setOut() {
    if (this.selectedDif > this.maxDifficulty ) {
      this.selectedDif--
    }
    this.explore.startExploration(this.where.area.name.toLowerCase(), this.selectedDif)
      .subscribe(
        response => {
          this.router.navigate(['/explore']).then(() => this.router.navigate(['/explore/area']))
        }
      )
  }

  takeAction(action) {
    this.explore.moveForward(action)
      .subscribe(
        response => {
          this.router.navigate(['/explore']).then(() => this.router.navigate(['/explore/area']))
        }
      )
  }

}
