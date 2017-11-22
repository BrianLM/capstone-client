import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { AuthService } from '../services/auth/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.auth.signOut()
  }

}
