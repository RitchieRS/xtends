import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule}  from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule}  from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

import { MissionComponent } from './mission.component';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: MissionComponent,
  }
];

@NgModule({
  declarations: [MissionComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule,
    CdkAccordionModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class MissionModule { }
