import { Component } from '@angular/core';
import { environment } from '../environments/environment'

import { ProfileService } from './services/profile/profile.service'
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enotspac';
  apiOrigin = environment.apiOrigin;

  constructor(
    private router: Router,
    public ux: ProfileService
  ) {
    // router.events.subscribe(event => {
    //   console.log('Saw the route change')
    //
    //   if (event instanceof NavigationEnd) {
    //     this.ux.getProfile()
    //   }
    // })

  }
}
