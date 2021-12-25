import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MymissionsComponent } from './mymissions/mymissions.component';

const routes: Routes =[
  {
  path:'',
  children:[
    {
      path:'mymissions',
      component: MymissionsComponent
    },
    {
    path: '',
      component: MymissionsComponent
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
export class MissionsRoutingModule { }
