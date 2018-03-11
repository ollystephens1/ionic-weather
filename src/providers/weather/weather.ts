import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  apiKey: 'cd4a3a9157453c1b';
  url: string;

  constructor(public http: HttpClient) {
    this.url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q`;
  }

  public getWeather(city: string, state: string) {
    return this.http.get(`${this.url}/${state}/${city}`);
  }

}
