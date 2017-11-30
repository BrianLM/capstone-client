import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class LevelsService {

  constructor(
    private http: Http
  ) { }

  getLevels() {
    let level = JSON.parse(localStorage.getItem('level'))
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiOrigin + '/levels/' + level, config)
  }
}
