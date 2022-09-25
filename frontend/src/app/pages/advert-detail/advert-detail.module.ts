import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertDetailPageRoutingModule } from './advert-detail-routing.module';

import { AdvertDetailPage } from './advert-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertDetailPageRoutingModule
  ],
  declarations: [AdvertDetailPage]
})
export class AdvertDetailPageModule {}
