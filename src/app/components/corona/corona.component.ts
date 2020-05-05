import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  countries= [];
  selectedCountry: string;
  chart = [];
  
  constructor(private _weather: CoronaService) {}

  ngOnInit() {
    this.getCountries();
    this.createChart('india')
    
  }

  createChart(country: any){

    this.selectedCountry = country;

    this._weather.dailyForecast(country)
      .subscribe((res: any) => {
       let end = res.length;
       let days = 30;

       this.selectedCountry = res[0].Country;
       

       let confirmed = res.map(res => res.Confirmed);
       confirmed = confirmed.slice(end-days,end)

       let recovered = res.map(res => res.Recovered);
       recovered=recovered.slice(end-days,end);

       let deaths = res.map(res => res.Deaths);
       deaths = deaths.slice(end-days,end);

       let alldates = res.map(res => res.Date.substring(0,10));
       alldates = alldates.slice(end-days,end);


        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: alldates,
            datasets: [
              {
                data: confirmed,
                borderColor: '#0000ff',
                label: 'Confirmed Cases',
                fill: false
              },
              {
                data: recovered,
                borderColor: '#008000',
                label: 'Recoverd Cases',
                fill: false
              },
              {
                data: deaths,
                borderColor: '#ff0000',
                label: 'Deaths',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

       })
  }

  getCountries(){
    this._weather.getCountries().subscribe( (data:any)=>{
      this.countries = data;
    })
  }

}
