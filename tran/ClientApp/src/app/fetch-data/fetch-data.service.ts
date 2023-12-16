import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {WeatherForecast} from "./weather.forecast";

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') url: string)  {
    this.baseUrl = url;
  }

  getForecast() {
    return this.http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast');
  }
}
