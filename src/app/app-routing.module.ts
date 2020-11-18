import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './menu/tabs/tabs.page';
import { MapsPage } from './page/maps/maps.page';
import  { LeafletPage } from './page/leaflet/leaflet.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./menu/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'leaflet',
    loadChildren: () => import('./page/leaflet/leaflet.module').then( m => m.LeafletPageModule)
  },
  {
    path: 'tabs', component: TabsPage, children: [
      {
        path: 'detail',
        loadChildren: () => import('./page/page/page.module').then( m => m.PagePageModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./page/details/details.module').then( m => m.DetailsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./page/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./page/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./page/maps/maps.module').then( m => m.MapsPageModule)
      },
      {
        path: 'leaflet',
        loadChildren: () => import('./page/leaflet/leaflet.module').then( m => m.LeafletPageModule)
      },

    ]
  },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
