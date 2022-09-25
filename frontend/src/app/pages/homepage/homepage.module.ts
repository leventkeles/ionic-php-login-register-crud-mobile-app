import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomepagePageRoutingModule } from './homepage-routing.module';
import { HomepagePage } from './homepage.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [HomepagePage]
})
export class HomepagePageModule {}
