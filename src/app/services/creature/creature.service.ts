import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class CreatureService {

  constructor(
    private http: Http
  ) { }

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
