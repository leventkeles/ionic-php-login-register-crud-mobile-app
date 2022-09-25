import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyinvertPageRoutingModule } from './myinvert-routing.module';

import { MyinvertPage } from './myinvert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyinvertPageRoutingModule
  ],
  declarations: [MyinvertPage]
})
export class MyinvertPageModule {}
