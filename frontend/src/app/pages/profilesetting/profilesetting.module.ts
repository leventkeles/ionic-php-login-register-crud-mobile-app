import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilesettingPageRoutingModule } from './profilesetting-routing.module';

import { ProfilesettingPage } from './profilesetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesettingPageRoutingModule
  ],
  declarations: [ProfilesettingPage]
})
export class ProfilesettingPageModule {}
