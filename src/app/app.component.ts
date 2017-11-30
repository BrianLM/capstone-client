import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment'
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Subscription } from "rxjs";

import { ProfileService } from './services/profile/profile.service'
import { AuthService } from './services/auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tick: string
  subscription: Subscription

  title = 'Enotspac';
  apiOrigin = environment.apiOrigin;

  constructor(
    public ux: ProfileService,
    public auth: AuthService
  ) { }

  ngOnInit() {
  let timer = TimerObservable.create(2000, 3600000);
    this.subscription = timer.subscribe(t => {
      this.ux.getProfile()
    });
  }
}
