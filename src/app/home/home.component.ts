import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component'

import { AuthService } from '../services/auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public app: AppComponent,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
