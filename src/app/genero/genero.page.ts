import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  name: string = '';
  gender: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  predictGender() {
    if (!this.name) {
      return;
    }

    const url = `https://api.genderize.io/?name=${this.name}`;
    this.http.get(url).subscribe((response: any) => {
      this.gender = response.gender;
    });
  }

  onNameInput() {
    this.gender = ''; // Limpiar el género mientras se escribe un nuevo nombre
  }

  getGenderImage() {
    if (this.gender === 'male') {
      return 'assets/masculino.jpg'; // Ruta de la imagen masculina
    } else if (this.gender === 'female') {
      return 'assets/mujer.jpg'; // Ruta de la imagen femenina
    } else {
      return ''; // Ruta vacía si el género no es conocido
    }
  }
}
