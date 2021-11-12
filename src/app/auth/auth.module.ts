import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';








@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    MatIconModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    ForgotComponent
  ]
})
export class AuthModule { }
