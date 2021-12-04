import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { WalletComponent } from './wallet/wallet.component';
import { MovementComponent } from './movement/movement.component';

const routes: Routes =[
  {
  path:'',
  children:[
    {
      path:'main',
      component: WalletComponent

    },
    {
      path: 'movements',
      component: MovementComponent

    },
    {
    path: '',
      component: WalletComponent
    }

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
