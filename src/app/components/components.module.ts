import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
