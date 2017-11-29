import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service'

@Injectable()
export class ProfileService {
  profileUpdated = new EventEmitter()

  profile: any
  constructor(
    private http: Http,
    private router: Router,
    private auth: AuthService
  ) { }

  getProfile() {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}

  }
}
