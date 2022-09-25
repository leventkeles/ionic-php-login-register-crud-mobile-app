import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'homepage',
        loadChildren: () => import('../homepage/homepage.module').then( m => m.HomepagePageModule)
      },
      {
        path: 'myinvert/:user_id',
        loadChildren: () => import('../myinvert/myinvert.module').then( m => m.MyinvertPageModule)
      },
      {
        path: 'invertadd',
        loadChildren: () => import('../invertadd/invertadd.module').then( m => m.InvertaddPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'advertdetail/:id',
        loadChildren: () => import('../advert-detail/advert-detail.module').then( m => m.AdvertDetailPageModule)
      },
      {
        path: 'advert-guncelle/:id',
        loadChildren: () => import('../advert-guncelle/advert-guncelle.module').then( m => m.AdvertGuncellePageModule)
      },
      {
        path: 'profilesetting/:user_id',
        loadChildren: () => import('../profilesetting/profilesetting.module').then( m => m.ProfilesettingPageModule)
      },
      {
        path: 'profiles/:user_id',
        loadChildren: () => import('../profiles/profiles.module').then( m => m.ProfilesPageModule)
      },

      {
        path: '',
        redirectTo:'tabs',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
