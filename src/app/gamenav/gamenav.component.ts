import { Component, OnInit } from '@angular/core';

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
