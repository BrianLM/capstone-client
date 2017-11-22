import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser = <any>{}

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  signUp(){
    this.auth.signUp(this.newUser.email, this.newUser.password, this.newUser.password_confirmation)
  }
}
