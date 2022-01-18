import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveMissionsPageRoutingModule } from './active-missions-routing.module';

import { ActiveMissionsPage } from './active-missions.page';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CdkAccordionModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatExpansionModule,
    ActiveMissionsPageRoutingModule
  ],
  declarations: [ActiveMissionsPage]
})
export class ActiveMissionsPageModule {}
