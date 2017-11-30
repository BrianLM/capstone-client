import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, NavigationEnd } from '@angular/router';


@Injectable()
export class CreatureService {

  creature: any
  creature$ = new BehaviorSubject<any>(this.creature)

  constructor(
    private router: Router,
    private http: Http
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCreature(JSON.parse(localStorage.getItem('creature')))
      }
    })
  }

  setCreature(value: any) {
    this.creature$.next(value)
    this.creature = value
  }

  sendStatRequest(stat: string, amount:number) {
    let creature = {'creature':{}}
    creature['creature'][stat] = amount

    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.patch(environment.apiOrigin + '/creatures/' + localStorage.getItem('id'), creature, config)
  }
  sendEvolveRequest() {
    let creature = {'creature':{}}

    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.patch(environment.apiOrigin + '/creatures/' + localStorage.getItem('id') + '?evolve', creature, config)
  }
}
