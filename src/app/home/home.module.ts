import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Actividad, HomePage } from './home.page';
import { AgmCoreModule } from '@agm/core';
import { HomePageRoutingModule } from './home-routing.module';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

import { ComponentsModule } from '../components/components.module';
import { AuthGuard } from '../xservices/authguard/auth.guard.service';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ComponentsModule,
    AgmCoreModule
  ],
  declarations: [HomePage,Actividad 
  ],
  providers:[AuthGuard]
})
export class HomePageModule {}
