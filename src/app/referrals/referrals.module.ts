import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferralsPageRoutingModule } from './referrals-routing.module';

import { ReferralsPage } from './referrals.page';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    ReferralsPageRoutingModule
  ],
  declarations: [ReferralsPage]
})
export class ReferralsPageModule {}
