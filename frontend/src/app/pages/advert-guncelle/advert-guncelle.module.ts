import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertGuncellePageRoutingModule } from './advert-guncelle-routing.module';

import { AdvertGuncellePage } from './advert-guncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertGuncellePageRoutingModule
  ],
  declarations: [AdvertGuncellePage]
})
export class AdvertGuncellePageModule {}
