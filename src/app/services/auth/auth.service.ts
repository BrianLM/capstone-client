import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';


@Injectable()
export class AuthService {
  pwcError: boolean = false
  signUpError: boolean = false
  signInError: boolean = false
  passwordChanged: boolean = false

  signIn(email: string, password: string) {
    // Create the credentials object.
    let credentials = {
      'credentials': {
        'email': email,
        'password': password
      }
    }

    // Make the post request. environment.apiOrigin contains the local server address http://localhost:4741
    this.http.post(environment.apiOrigin + '/sign-in', credentials)
      .subscribe(
        // Save the response to user
        response => {
          const user = JSON.parse(response['_body']).user
          this.signInError = false
          for (let key in user) {
            localStorage.setItem(key, user[key])
          }
          this.router.navigate(['/home'])
        },
        err => this.signInError = true
      )
  }

  signUp(email: string, password: string, password_confirmation: string) {
    // Create the credentials object.
    const credentials = {
      'credentials': {
        'email': email,
        'password': password,
        'password_confirmation': password_confirmation
      }
    }

    // Make the post request. environment.apiOrigin contains the local server address http://localhost:4741
    this.http.post(environment.apiOrigin + '/sign-up', credentials)
      .subscribe(
        response => {
          // Send the existing credentials back to the server to log in the new user
          this.signIn(credentials.credentials.email, credentials.credentials.password)
          this.signUpError = false
          this.router.navigate(['/home'])
        },
        err => this.signUpError = true
      )
  }

  signOut() {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    // Make the delete request to URL, and add the token from Config.
    this.http.delete(environment.apiOrigin + '/sign-out/' + localStorage.getItem('id'), config)
      .subscribe(
        // Remove the logged in user.
        data => {
          localStorage.clear()
          this.router.navigate(['/home'])
      },
        err => console.log(err)
      )
  }

  changePassword(oldPassword: string, newPassword: string) {
    // Create the passwords data object to send.
    let passwords = {
      'passwords': {
        'old': oldPassword,
        'new': newPassword
      }
    }

    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}

    // Make the patch request to URL, add the password data and token from Config.
    this.http.patch(environment.apiOrigin + '/change-password/' + localStorage.getItem('id'), passwords, config)
      .subscribe(
        data => {
          this.passwordChanged = true
          this.pwcError = false
        },
        err => {
          this.passwordChanged = false
          this.pwcError = true
        }
      )
  }

  getLocal(id: any) {
    return localStorage.getItem(id)
  }


  constructor(
    private http: Http,
    private router: Router
  ) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          localStorage.setItem('route', event.url.split('/', 2)[1])
        }
      })
    }
}
