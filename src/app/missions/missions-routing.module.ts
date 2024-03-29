import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MymissionsComponent } from './mymissions/mymissions.component';
import { StartMissionComponent } from './start-mission/start-mission.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MissionCompleteComponent} from './mission-complete/mission-complete.component';
import { PendingMissionComponent } from './pending-mission/pending-mission.component';
import { AgmCoreModule } from '@agm/core';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

const routes: Routes =[
  {
  path:'',
  children:[
    {
      path:'mymissions',
      component: MymissionsComponent
    },
    {
      path: 'start-mission/:idPV',
      component: StartMissionComponent
    },
    {
      path: 'check-in/:idPV',
      component: CheckInComponent
    },
    {
      path: 'pending-mission/:idPV/:colorServicio/:nombreCliente/:nombreActividad',
       component: PendingMissionComponent
    },
    {
      path: 'check-out/:idPV',
      component: CheckOutComponent
    },
    {
      path: 'mission-complete/:idPV',
      component: MissionCompleteComponent
    },
    // {
    //   path: 'mission-detail',
    //   component: MissionDetailsComponent
    // },
    {
      path: 'mission-detail/:idPV',
      component: MissionDetailsComponent
    },
   ]
  },
];

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forChild(routes),
    MatIconModule,
    AgmCoreModule
  ],
  exports:[ RouterModule ]

})
export class MissionsRoutingModule { }
