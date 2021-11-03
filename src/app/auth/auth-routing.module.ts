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
      path:"forgot",
      component: ForgotComponent},
    {
      path:"login",
      component: LoginComponent},
    {
      path:"register",
      component: RegisterComponent
    },
    {
      path:"help",
      component: HelpComponent
    }
   ]
  }
];



@NgModule({
  declarations: [],
  imports:[
    RouterModule.forChild(routes)
  ]
 
})
export class AuthRoutingModule { }
