import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  cityName: string = 'La Romana'; // Nombre de la ciudad para la cual se mostrará el clima
  weatherData: any = null;

  private apiKey: string = '0244f2ed7c61e1d6881bd94565372b47';
  private apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}&units=metric`;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.http.get(this.apiUrl).subscribe((response: any) => {
      this.weatherData = response;
    });
  }
}
