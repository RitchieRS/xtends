import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';

import { ProfileRoutingModule } from './profile-routing.module';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ComponentsModule } from '../components/components.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';






@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],

  declarations: [
    ProfileComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ComponentsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule
  ],
  exports:[
    ProfileComponent
  ]

})
export class ProfileModule {}

