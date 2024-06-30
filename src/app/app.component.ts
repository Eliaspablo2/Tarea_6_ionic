import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'briefcase' },
    { title: 'Cual es el genero', url: 'genero', icon: 'body' },
    { title: 'Monstrar Edad', url: 'edad', icon: 'man' },
    { title: 'Universidades', url: 'universidad', icon: 'business' },
    { title: 'Clima', url: 'clima', icon: 'rainy' },
    { title: 'Pagina Web', url: 'pagina-web', icon: 'desktop' },
    { title: 'Acerca de mi', url: 'acerca-de', icon: 'id-card' },
  ];

  constructor() {}
}
