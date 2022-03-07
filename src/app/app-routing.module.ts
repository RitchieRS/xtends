import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MissionRoutingModule } from './mission/mission-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { WalletRoutingModule } from './wallet/wallet-routing.module';
import { SlidePageRoutingModule } from './slide/slide-routing.module';
import { MissionsRoutingModule } from './missions/missions-routing.module';
import { XtendLevelsRoutingModule } from './xtend-levels/xtend-levels-routing.module';
import { TrainingsRoutingModule } from './trainings/trainings-routing-module';



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
    path: 'mission/:idPV',
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
    loadChildren: () => import('./missions/missions.module').then( m => m.MissionsModule)
  },
  {
    path: 'referrals',
    loadChildren: () => import('./referrals/referrals.module').then( m => m.ReferralsPageModule)
  },
  {
    path: 'active-missions',
    loadChildren: () => import('./active-missions/active-missions.module').then( m => m.ActiveMissionsPageModule)
  },
  {
    path: 'xtend-levels',
    loadChildren: () => import('./xtend-levels/xtend-levels.module').then( m => m.XtendLevelsModule)
  },
  {
    path: 'trainings-list',
    loadChildren: () => import('./trainings/trainings.module').then( m => m.TrainingsModule)
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
    MissionsRoutingModule,
    XtendLevelsRoutingModule,
    TrainingsRoutingModule
  ]
})
export class AppRoutingModule { }
