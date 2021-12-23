import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CoronaService } from './services/corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  country: any;
  countries = [];
  confirmed: Number;
  recovered: Number;
  deaths: Number;

  constructor(private corona: CoronaService) {}

  ngOnInit() {
    this.corona.getCountries().subscribe(data => {
      this.countries =data;
    })
  }

  getCoronaData() {
    this.corona.getCoronaRealTimeData(this.country).subscribe(data => {
      var index = data.length-1;
      this.confirmed = data[index].Confirmed;
      this.recovered = data[index].Recovered;
      this.deaths = data[index].Deaths;
    })
  }

  getCountry(country:any) {
    this.country = country;
  }
}
