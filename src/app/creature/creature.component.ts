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
  constructor(
    public router: Router,
    public creatureService: CreatureService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home'])
    } else {
      this.creature = JSON.parse(localStorage.getItem('creature'))
      console.log(this.creature)
    }
  }

}
