import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { HideHeaderDirective } from './header/hide-header.directive';
// import { SharedDirectivesModule } from '../directives/shared-directives.module';



@NgModule({
  declarations: [
    HeaderComponent,
    HideHeaderDirective
  ],
  exports:[
    HeaderComponent,
    HideHeaderDirective
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatIconModule,
  ]
})
export class ComponentsModule { }
