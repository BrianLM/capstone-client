import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class ExploreService {

  constructor(
    private http: Http
  ) { }

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
