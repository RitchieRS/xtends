import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HideHeaderDirective } from './header/hide-header.directive';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HideHeaderDirective
  ],
  exports:[
    FooterComponent,
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
