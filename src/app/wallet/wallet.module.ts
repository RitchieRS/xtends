import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { WalletRoutingModule } from './wallet-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ComponentsModule } from '../components/components.module';
import { MovementComponent } from './movement/movement.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EarnedMoneyComponent } from './earned-money/earned-money.component';
import { PromotoriaRepseComponent } from './promotoria-repse/promotoria-repse.component';



@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [
    WalletComponent,
    MovementComponent,
    EarnedMoneyComponent,
    PromotoriaRepseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    IonicModule,
    WalletRoutingModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    CdkAccordionModule,
    ComponentsModule,
    RouterModule,
    MatDatepickerModule
  ],
  exports:[
    WalletComponent,
    MovementComponent,
    EarnedMoneyComponent,
    PromotoriaRepseComponent,
  ]
})

export class WalletModule { }
