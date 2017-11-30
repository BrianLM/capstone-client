import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class ExploreService {

  exploration: any
  exploration$ = new BehaviorSubject<any>(this.exploration)

  constructor(
    private router: Router,
    private http: Http
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setExploration(JSON.parse(localStorage.getItem('exploration')))
      }
    })
  }

  setExploration(value: any) {
    this.exploration$.next(value)
    this.exploration = value
  }

  startExploration (area: string, dif: number) {
    let config = {}
    let data = {
      'exploration': {
        'area': area,
        'dif': dif
      }
    }
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.patch(
      environment.apiOrigin + '/explorations/' + localStorage.getItem('id') + '?start',
      data,
      config
    )

  }

  moveForward(action:string) {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}

    let data = {
      'exploration': {
        'area': 'any',
        'dif': 1
      }
    }
    return this.http.patch(
      environment.apiOrigin + '/explorations/' + localStorage.getItem('id') + '?' + action,
      data,
      config
    )
  }
}
