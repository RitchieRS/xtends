import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../xservices/authguard/auth.guard.service';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    //redirectTo: '/auth',
    canActivate:[AuthGuard],
    component: HomePage,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
  providers :[AuthGuard]
})
export class HomePageRoutingModule {}
