import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class CreatureService {

  constructor(
    private http: Http
  ) { }

}
