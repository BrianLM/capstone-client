import { Component, OnInit } from '@angular/core';
import { ExpRoutingModule } from '../explore/exp-routing.module'

@Component({
  selector: 'app-gamenav',
  templateUrl: './gamenav.component.html',
  styleUrls: ['./gamenav.component.css']
})
export class GamenavComponent implements OnInit {
  imageCenter: string = 'assets/desert.jpg'


  constructor() { }

  ngOnInit() {
  }

}
