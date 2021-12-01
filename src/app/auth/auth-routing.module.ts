import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
// import { HelpComponent } from './pages/help/help.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {MatIconModule} from '@angular/material/icon';
import {RecoveryComponent} from './pages/recovery/recovery.component';
import { CheckLoginGuard } from '.././shared/guards/check-login.guard';

const routes: Routes =[
  {
  path:'',
  canActivate:[CheckLoginGuard],
  children:[
    {
      path:'login',
      component: LoginComponent

    },
    {
      path: 'forgot',
      component: ForgotComponent

    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
    path: 'recovery',
      component: RecoveryComponent
    },
    {
    path: '',
      component: LoginComponent
    }

   ]
  }
];



@NgModule({
  declarations: [],
  imports:[
    RouterModule.forChild(routes),
    MatIconModule
  ],
  exports:[ RouterModule ]

})
export class AuthRoutingModule { }
