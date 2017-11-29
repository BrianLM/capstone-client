import { Component } from '@angular/core';
import { environment } from '../environments/environment'

import { ProfileService } from './services/profile/profile.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enotspac';
  apiOrigin = environment.apiOrigin;

  constructor(
    public ux: ProfileService
  ) { }
}
