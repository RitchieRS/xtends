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
import {MatRadioModule} from '@angular/material/radio';

import { ProfileComponent } from './profile.component';



const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  }
];



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    CdkAccordionModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule
  ],
  exports: [RouterModule]
})
export class ProfileModule { }
