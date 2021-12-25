import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ComponentsModule } from '../components/components.module';

import { MymissionsComponent } from './mymissions/mymissions.component';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    MymissionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    ComponentsModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports: [
    MymissionsComponent,
  ],
})
export class MissionsModule { }
