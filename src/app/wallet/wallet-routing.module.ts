import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementComponent } from './movement/movement.component';
import { WalletComponent } from './wallet/wallet.component';
import { MatIconModule } from '@angular/material/icon';


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
