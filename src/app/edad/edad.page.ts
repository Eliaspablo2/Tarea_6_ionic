import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  name: string = '';
  age: number | null = null;
  ageCategory: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  predictAge() {
    if (!this.name) {
      return;
    }

    const url = `https://api.agify.io/?name=${this.name}`;
    this.http.get(url).subscribe((response: any) => {
      this.age = response.age;
      this.setAgeCategory();
    });
  }

  onNameInput() {
    this.age = null; // Limpiar la edad mientras se escribe un nuevo nombre
    this.ageCategory = ''; // Limpiar la categoría de edad
  }

  setAgeCategory() {
    if (this.age !== null) {
      if (this.age < 18) {
        this.ageCategory = 'young';
      } else if (this.age < 60) {
        this.ageCategory = 'adult';
      } else {
        this.ageCategory = 'elderly';
      }
    }
  }

  getAgeImage() {
    if (this.ageCategory === 'young') {
      return 'assets/joven.jpg'; // Ruta de la imagen joven
    } else if (this.ageCategory === 'adult') {
      return 'assets/adulto.jpg'; // Ruta de la imagen adulto
    } else if (this.ageCategory === 'elderly') {
      return 'assets/viejo.jpg'; // Ruta de la imagen anciano
    } else {
      return ''; // Ruta vacía si la categoría de edad no es conocida
    }
  }
}

