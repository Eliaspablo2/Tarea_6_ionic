import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaWebPage } from './pagina-web.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaWebPageRoutingModule {}
