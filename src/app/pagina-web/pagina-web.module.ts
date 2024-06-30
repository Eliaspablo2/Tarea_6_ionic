import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaWebPageRoutingModule } from './pagina-web-routing.module';

import { PaginaWebPage } from './pagina-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaWebPageRoutingModule
  ],
  declarations: [PaginaWebPage]
})
export class PaginaWebPageModule {}
