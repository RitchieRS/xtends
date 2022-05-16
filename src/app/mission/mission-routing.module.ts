import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './mission.component';

const routes: Routes = [
  {
    path: 'mission/:idPV/:colorServicio/:nombreActividad/:estado/:ciudad',
    component: MissionComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MissionRoutingModule {}