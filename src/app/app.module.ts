import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// owl-carousel module
import { CarouselModule } from 'ngx-owl-carousel-o';

// Lotti-module
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// material modules
import { MatIconModule } from '@angular/material/icon';

// RatingModule
import { RatingComponent } from './shared/rating/rating.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorListComponent,
    HeaderComponent,
    NavbarComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule,
    MatIconModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
