import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MissionRoutingModule } from './mission/mission-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { WalletRoutingModule } from './wallet/wallet-routing.module';
import { SlidePageRoutingModule } from './slide/slide-routing.module';
import { MissionsPageRoutingModule } from './missions/missions-routing.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate:[CheckLoginGuard]
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mission/:idTienda/:idProyecto',
    loadChildren: () => import('./mission/mission.module').then( m => m.MissionModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletModule)
  },
  // este path de abajo yo lo puse amigo si quieres eliminalo
  {
    path: 'mission',
    loadChildren: () => import('./mission/mission.module').then( m => m.MissionModule)
  },  
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'missions',
    loadChildren: () => import('./missions/missions.module').then( m => m.MissionsPageModule)
  },
  {
    path: '**', redirectTo: 'auth', pathMatch: 'full',
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule,
    AuthRoutingModule,
    WalletRoutingModule,
    MissionRoutingModule,
    ProfileRoutingModule,
    SlidePageRoutingModule,
    MissionsPageRoutingModule,

  ]
})
export class AppRoutingModule { }
