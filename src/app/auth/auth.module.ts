import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    IonicModule,
    FormsModule
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
