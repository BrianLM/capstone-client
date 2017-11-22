import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  password: string
  change: string

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.auth.user) {
      this.router.navigate(['/home'])
    }
    this.auth.passwordChanged = false
    this.auth.pwcError = false
  }

  goHome(){
    this.router.navigate(['/home'])
  }

  changePassword() {
    this.auth.changePassword(this.password, this.change)
  }
}
