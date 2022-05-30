import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { TestComponent} from './test/test.component';
import { TrainingCompletedComponent } from './training-completed/training-completed.component';
const routes: Routes = [
  {
    path:'',
    children:[
     /* {
        path:'main',
        component: TrainingsListComponent

      },*/
      {

      path: 'trainings-list/:colorServicio/:idCliente/:idProyecto',
        component: TrainingsListComponent

      },
      {
      path: 'training/:idCurso/:namee/:iconn/:colorr',
        component: TrainingComponent
      },
      {
        path: 'evaluation',
        component: EvaluationComponent
      },
      {
        path: 'test/:idCurso/:namee/:iconn/:colorr',
        component: TestComponent
      },
      {
        path: 'training-completed',
        component: TrainingCompletedComponent
      },
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







