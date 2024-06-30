import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaWebPage } from './pagina-web.page';

describe('PaginaWebPage', () => {
  let component: PaginaWebPage;
  let fixture: ComponentFixture<PaginaWebPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
