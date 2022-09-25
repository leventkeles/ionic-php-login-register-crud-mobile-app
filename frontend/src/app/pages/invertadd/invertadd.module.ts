import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvertaddPageRoutingModule } from './invertadd-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InvertaddPage } from './invertadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvertaddPageRoutingModule,
    HttpClientModule
  ],
  declarations: [InvertaddPage]
})
export class InvertaddPageModule {}
