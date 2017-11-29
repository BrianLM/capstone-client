import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../auth/auth.service'

@Injectable()
export class ProfileService {
  energy: any
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
      this.http.get(environment.apiOrigin + '/users/' + localStorage.getItem('id'), config)
        .subscribe(
          response => {
            const user = JSON.parse(response['_body']).user
            for (let key in user) {
              if(typeof user[key] === 'object') {
                localStorage.setItem(key, JSON.stringify(user[key]))
              } else {
                localStorage.setItem(key, user[key])
              }
            }
            this.energy = JSON.parse(localStorage.getItem('user_profile')).energy
          }
        )
      }
    }
  }
}
