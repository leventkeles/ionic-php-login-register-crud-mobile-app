import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertGuncellePage } from './advert-guncelle.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertGuncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertGuncellePageRoutingModule {}
