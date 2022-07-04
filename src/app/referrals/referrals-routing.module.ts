import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { ReferralsPage } from './referrals.page';
import { ReferMissionComponent } from './refer-mission/refer-mission.component';
import { CommonModule } from '@angular/common';
import { ReferNoRegisComponent } from './refer-no-regis/refer-no-regis.component';

const routes: Routes = [
  {
    path: '',
    children:[

      {
        path: '',
        component: ReferralsPage
      },

      {
       path: 'refer-mission/:idPV/:nombreActividad/:colorServicio/:iconServicio/:pago/:descripcion/:canal/:sucursal/:infografia',
       component: ReferMissionComponent
      },

      {
        path: 'refer-no-regis',
        component: ReferNoRegisComponent
       },
      ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class ReferralsPageRoutingModule {}
