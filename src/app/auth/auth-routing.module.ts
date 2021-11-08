import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { HelpComponent } from './pages/help/help.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes =[
  {
  path:'',
  children:[
    {
      path:"login",
      component: LoginComponent,
      pathMatch:'full'
    },
    {
      path: 'forgot',
      component: ForgotComponent,
      pathMatch:'full'
    },
    {
      path: 'register',
      component: RegisterComponent,
      pathMatch:'full'
    },
   /*  {
      path: '**',
      redirectTo:'login'
    }*/
   ]
  }
];



@NgModule({
  declarations: [],
  imports:[
    RouterModule.forChild(routes),
  ],
  exports:[ RouterModule]
 
})
export class AuthRoutingModule { }
