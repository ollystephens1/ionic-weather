import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  url = 'http://api.wunderground.com/api/cd4a3a9157453c1b/conditions/q';

  constructor(private http: HttpClient) {
    console.log(this.url);
  }

  public getWeather(city: string, state: string) {
    return this.http.get(`${this.url}/${state}/${city}.json`);
  }

}
