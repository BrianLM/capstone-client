import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../auth/auth.service'

@Injectable()
export class ProfileService {

  constructor(
    private http: Http,
    private router: Router,
    private auth: AuthService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getProfile()
      }
    })
  }

  getProfile() {
    if (localStorage.getItem('token')) {
      let config = {}
      config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
      this.http.get(environment.apiOrigin + '/user_profiles/' + localStorage.getItem('id'), config)
        .subscribe(
          response => {
            const user = JSON.parse(response['_body']).user_profile
            for (let key in user) {
              localStorage.setItem(key, user[key])
            }
          }
        )
    }
  }
}
