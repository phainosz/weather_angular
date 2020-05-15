import { Weather } from './weather';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl: string;
  key: string;

  constructor(private http: HttpClient) {
    this.key = 'c1cbc21623724b8bad9152129202204';
  }

  get(cidade: string): Observable<Weather> {
    this.baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${cidade}&days=7`;
    return this.http.get<Weather>(this.baseUrl);
  }
}
