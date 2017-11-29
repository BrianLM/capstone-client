import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { AuthService } from '../services/auth/auth.service'
import { ProfileService } from '../services/profile/profile.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public ux: ProfileService
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.auth.signOut()
  }

}
