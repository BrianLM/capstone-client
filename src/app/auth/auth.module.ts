import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [SigninComponent, SignupComponent, ChangepasswordComponent]
})
export class AuthModule { }
