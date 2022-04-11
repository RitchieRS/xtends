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
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { EvaluationComponent } from './evaluation/evaluation.component';




@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
  declarations: [
    TrainingsListComponent,
    TrainingComponent,
    EvaluationComponent,
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
    SwiperModule
  ]
})
export class TrainingsModule { }
