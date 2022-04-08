import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { TrainingComponent } from '../trainings/training/training.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
},
{
  path: 'training/:idCurso',
  component: TrainingComponent
},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}