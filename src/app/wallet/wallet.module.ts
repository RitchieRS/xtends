import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { WalletRoutingModule } from './wallet-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { ComponentsModule } from '../components/components.module';
import { MovementComponent } from './movement/movement.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [
    WalletComponent,
    MovementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletRoutingModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports:[
    WalletComponent,
    MovementComponent
  ]
})

export class WalletModule { }
