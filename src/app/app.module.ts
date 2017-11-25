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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    HomeComponent,
    GamenavComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    BsDropdownModule.forRoot(),
    AuthRoutingModule,
    ExpRoutingModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ExploreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
