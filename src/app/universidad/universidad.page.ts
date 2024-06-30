import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.page.html',
  styleUrls: ['./universidad.page.scss'],
})
export class UniversidadPage implements OnInit {
  country: string = '';
  universities: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  searchUniversities() {
    if (!this.country) {
      return;
    }

    const url = `http://universities.hipolabs.com/search?country=${encodeURIComponent(this.country)}`;
    this.http.get(url).subscribe((response: any) => {
      this.universities = response;
    });
  }

  onCountryInput() {
    this.universities = []; // Limpiar la lista de universidades mientras se escribe un nuevo país
  }
}
