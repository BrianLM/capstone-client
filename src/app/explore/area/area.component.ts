import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExploreComponent } from '../explore.component'
import { ExploreService } from '../../services/explore/explore.service'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  exploration: any
  exploring: string
  inBattle: boolean
  maxDifficulty: number
  selectedDif: number
  energyRequired: number
  towards: string

  constructor(
    public where: ExploreComponent,
    public explore: ExploreService,
    public router: Router
  ) {
    this.explore.exploration$.subscribe(
      result => {
        this.exploration = result
      }
    )
  }

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
      this.towards = ((this.exploration.step / this.exploration.end) * 100) + '%'
    }
    this.inBattle = JSON.parse(localStorage.getItem('encounter')) ? true : false
    this.maxDifficulty = JSON.parse(localStorage.getItem('exploration'))[areaKey] + 1
    this.energyRequired = JSON.parse(localStorage.getItem('exploration')).dif ? Math.round((JSON.parse(localStorage.getItem('exploration')).dif / 10) + 1) : 1
    this.selectedDif = this.maxDifficulty
  }

  difDecrease() {
    this.selectedDif--
  }

  difIncrease() {
    this.selectedDif++
  }

  setOut() {
    if (this.selectedDif === this.maxDifficulty ) {
      this.selectedDif--
    }
    this.explore.startExploration(this.where.area.name.toLowerCase(), this.selectedDif)
      .subscribe(
        response => {
          localStorage.setItem('exploration', JSON.stringify(JSON.parse(response['_body']).exploration))
          this.router.navigate(['/explore']).then(() => this.router.navigate(['/explore/area']))
        }
      )
  }

  takeAction(action) {
    this.explore.moveForward(action)
      .subscribe(
        response => {
          localStorage.setItem('encounter', JSON.stringify(JSON.parse(response['_body']).exploration.encounter))
          localStorage.setItem('exploration', JSON.stringify(JSON.parse(response['_body']).exploration))
          this.router.navigate(['/explore']).then(() => this.router.navigate(['/explore/area']))
        }
      )
  }

}
