import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { LoginComponent } from './pages/admin/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent,
    title:'Search Flight'
  },
  {
    path: 'book-flight',
    component: BookFlightComponent,
    title:'Book Flight'
  },
  {
    path: 'bookings',
    component: MyBookingsComponent,
    title: 'My Bookings'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'airport',
        component: AirportComponent,
        title: 'Airport'
      },
      {
        path: 'allflights',
        component: AllFlightsComponent,
        title: 'All Flight'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
