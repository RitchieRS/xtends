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
      path: 'help',
      component : HelpComponent
    },
    

    /* {
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
