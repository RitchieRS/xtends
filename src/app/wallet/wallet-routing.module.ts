import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { WalletComponent } from './wallet/wallet.component';
import { MovementComponent } from './movement/movement.component';
import { EarnedMoneyComponent } from './earned-money/earned-money.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferOrderComponent } from './transfer-order/transfer-order.component';

const routes: Routes =[
  {
  path:'',
  children:[
    {
      path:'main',
      component: WalletComponent

    },
    {
      path: 'movement',
      component: MovementComponent

    },
    {
    path: '',
      component: WalletComponent
    },
    {
    path: 'earned-money',
      component: EarnedMoneyComponent
    },
    {
      path: 'transfer',
        component: TransferComponent
    },
    {
       path: 'transfer-order',
         component: TransferOrderComponent
    },
   ]
  }
];

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forChild(routes),
    MatIconModule
  ],
  exports:[ RouterModule ]

})
export class WalletRoutingModule { }
