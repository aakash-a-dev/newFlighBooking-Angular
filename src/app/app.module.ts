import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { CityComponent } from './pages/admin/city/city.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { SearchComponent } from './pages/website/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    AllFlightsComponent,
    BookingsComponent,
    CityComponent,
    LayoutComponent,
    LoginComponent,
    NewFlightComponent,
    BookFlightComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
