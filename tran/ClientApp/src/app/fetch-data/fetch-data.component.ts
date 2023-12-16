import {Component, OnInit} from '@angular/core';
import {WeatherForecast} from "./weather.forecast";
import {FetchDataService} from "./fetch-data.service";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private fetchDataService: FetchDataService) {
  }

  ngOnInit(){
    this.fetchDataService.getForecast()
      .subscribe({
        next: (result) => this.forecasts = result,
        error: (error) => console.error(error)
      });
  }
}
