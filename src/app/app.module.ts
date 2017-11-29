import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ExpRoutingModule } from './explore/exp-routing.module'

import { AuthService } from './services/auth/auth.service';

import { AuthModule } from './auth/auth.module';
import { ExploreModule } from './explore/explore.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GamenavComponent } from './gamenav/gamenav.component';
import { FarmModule } from './farm/farm.module';
import { ProfileService } from './services/profile/profile.service';
import { StatisticsComponent } from './statistics/statistics.component';
import { LevelsService } from './services/levels/levels.service';
import { CreatureComponent } from './creature/creature.component';
import { CreatureService } from './services/creature/creature.service';
import { ExploreService } from './service/explore/explore.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    HomeComponent,
    GamenavComponent,
    StatisticsComponent,
    CreatureComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AuthRoutingModule,
    ExpRoutingModule,
    AppRoutingModule,
    ExploreModule,
    FarmModule,
  ],
  providers: [AuthService, ProfileService, LevelsService, CreatureService, ExploreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
