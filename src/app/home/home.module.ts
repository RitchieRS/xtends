import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { ComponentsModule } from '../components/components.module';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ComponentsModule,
    MatIconModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
