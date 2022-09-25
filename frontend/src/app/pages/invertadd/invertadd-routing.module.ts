import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvertaddPage } from './invertadd.page';

const routes: Routes = [
  {
    path: '',
    component: InvertaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvertaddPageRoutingModule {}
