import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  cityList: any[] = [];
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.getAllCity();
  }

  getAllCity() {
    this.http.get('https://freeapi.gerasim.in/api/FlightBooking/GetAllCity').subscribe((res: any) => {
      this.cityList = res.data;
      console.log(res.data)
    },    (error) => {
      console.error('Error fetching cities:', error);
    }

    )
  }

}
