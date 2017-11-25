import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExploreComponent } from '../explore.component'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  imgIndex: number = 0
  images: Array<any> = [
    {
      desc: 'Hot and unforgiving. You can gather stones here.',
      img: "../../../assets/desert.jpg",
      name: 'Desert'
    },
    {
      desc: 'Lush and green, teeming with life. You may find lumber here.',
      img: "../../../assets/forest.jpg",
      name: 'Forest'
    },
    {
      desc: 'Calm rolling hills as far as you can see. Grains are found in this area.',
      img: "../../../assets/plains.jpg",
      name: 'Plains'
    },
    {
      desc: 'Rough terain that touches the sky. You may find Ore here. ',
      img: "../../../assets/mountain.jpg",
      name: 'Mountain'
    }
  ]

  constructor(
    private router: Router,
    private ec: ExploreComponent
  ) { }

  ngOnInit() {
  }

  goExplore() {
    this.ec.area =  this.images[this.imgIndex]
    this.router.navigate(['/explore/area'])
  }

  slideClick(ind) {
    if (typeof ind === 'string') {
      switch(ind) {
        case 'l': {
          ind = this.imgIndex > 0 ? this.imgIndex - 1 : this.images.length - 1
          break
        }
        case 'r': {
          ind = this.imgIndex < this.images.length - 1 ? this.imgIndex + 1 : 0
          break
        }
      }
    }
    this.imgIndex = ind
  }
}
