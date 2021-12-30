import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MymissionsComponent } from './mymissions/mymissions.component';
import { StartMissionComponent } from './start-mission/start-mission.component';
import { CheckInComponent } from './check-in/check-in.component';
import { PendingMissionComponent } from './pending-mission/pending-mission.component';

const routes: Routes =[
  {
  path:'',
  children:[
    {
      path:'mymissions',
      component: MymissionsComponent
    },
    {
      path: 'start-mission',
      component: StartMissionComponent
    },
    {
      path: 'check-in',
      component: CheckInComponent
    },
    {
      path: 'pending-mission',
       component: PendingMissionComponent
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
