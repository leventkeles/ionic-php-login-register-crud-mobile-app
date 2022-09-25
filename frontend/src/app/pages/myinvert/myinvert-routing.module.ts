import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyinvertPage } from './myinvert.page';

const routes: Routes = [
  {
    path: '',
    component: MyinvertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyinvertPageRoutingModule {}
