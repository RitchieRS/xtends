import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    RecoveryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    RecoveryComponent
  ]
})
export class AuthModule { }
