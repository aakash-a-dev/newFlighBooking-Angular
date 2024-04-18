import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elementAt } from 'rxjs';
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
    const apiUrl = 'https://freeapi.gerasim.in/api/FlightBooking/GetAllCity';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = proxyUrl + apiUrl;
    this.http.get(apiUrl).subscribe((res: any) => {
      this.cityList = res.data;
      // this.cityList.forEach(element => {
      //   element.isEdit = false;
      // })
    },
      (error) => {
      console.error(error)
    })
  }

}
