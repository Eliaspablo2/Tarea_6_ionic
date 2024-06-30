import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina-web',
  templateUrl: './pagina-web.page.html',
  styleUrls: ['./pagina-web.page.scss'],
})
export class PaginaWebPage implements OnInit {
  logoUrl: string = 'https://gamersrd.com/wp-content/uploads/2017/01/Logo-GRD.png'; // URL del logo
  news: any[] = [];

  private apiUrl: string = 'https://gamersrd.com/wp-json/wp/v2/posts?per_page=3';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.http.get(this.apiUrl).subscribe((response: any) => {
      this.news = response;
    });
  }
}
