import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AuthService } from '../auth/auth.service'

@Injectable()
export class ProfileService {
  energy: number

  energy$ = new BehaviorSubject<number>(this.energy)
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

  setEnergy(value: number) {
    this.energy$.next(value)
    this.energy = value
  }

  requestProfile() {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiOrigin + '/user_profiles/' + localStorage.getItem('id'), config)
  }

  getProfile() {
    if (localStorage.getItem('token')) {
      this.requestProfile()
        .subscribe(
          response => {
            const user = JSON.parse(response['_body']).user_profile
            for (let key in user) {
              if(typeof user[key] === 'object') {
                localStorage.setItem(key, JSON.stringify(user[key]))
              } else {
                localStorage.setItem(key, user[key])
              }
            }
            this.setEnergy(parseInt(localStorage.getItem('energy')))
          }
        )
      }
    }
}
