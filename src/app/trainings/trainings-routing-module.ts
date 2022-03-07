import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'main',
        component: TrainingsListComponent

      },
      {
        path: 'trainings-list',
        component: TrainingsListComponent

      },
      {
      path: 'training',
        component: TrainingComponent
      }

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TrainingsRoutingModule { }







