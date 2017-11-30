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

  exploring: any
  inBattle: boolean
  maxDifficulty: number
  selectedDif: number
  energyRequired: number

  constructor(
    public where: ExploreComponent,
    public explore: ExploreService,
    public router: Router
  ) { }

  ngOnInit() {
    this.exploring = JSON.parse(localStorage.getItem('exploration')).area ? JSON.parse(localStorage.getItem('exploration')).area : false
    let areaKey = `top_${this.exploring.substr(0,1)}`
    console.log(this.exploring)
    if (!this.exploring) {
      if (!this.where.area ) {
        this.router.navigate(['/home'])
      } else {
        areaKey = `top_${this.where.area.name.substr(0,1)}`
      }
    }
    this.inBattle = JSON.parse(localStorage.getItem('exploration')).encounter_id ? true : false
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
          this.router.navigate(['/home']).then(() => this.router.navigate(['/explore/area']))
        }
      )
  }

  takeAction(action) {
    console.log(action)
  }

}
