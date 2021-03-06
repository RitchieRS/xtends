import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsRoutingModule } from './trainings-routing-module';
import { TrainingComponent } from './training/training.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ComponentsModule } from '../components/components.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { EvaluationComponent } from './evaluation/evaluation.component';
import { TestComponent } from './test/test.component';
import { TrainingCompletedComponent } from './training-completed/training-completed.component';




@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
  declarations: [
    TrainingsListComponent,
    TrainingComponent,
    EvaluationComponent,
    TestComponent,
    TrainingCompletedComponent,
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    CdkAccordionModule,
    ComponentsModule,
    RouterModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TrainingsModule { }
