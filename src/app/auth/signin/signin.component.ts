import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = <any>{}

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.pwcError = false
    this.auth.signUpError = false
    this.auth.signInError = false
    this.auth.passwordChanged = false
  }

  signIn(){
    this.auth.signIn(this.user.email, this.user.password)
  }
}
