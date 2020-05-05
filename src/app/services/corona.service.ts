import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoronaService {


  constructor(private _http: HttpClient) { }

  dailyForecast(country: any) {
    // let url = "http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22";
    let url = `https://api.covid19api.com/total/dayone/country/${country}`;
    return this._http.get(url);
      // .map(result => result);
  }

  getCountries(){
    let url = "https://api.covid19api.com/countries";
    return this._http.get(url);
  }



}
