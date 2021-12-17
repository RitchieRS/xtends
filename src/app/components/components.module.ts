import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';

import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HideHeaderDirective } from './header/hide-header.directive';
import { PipesModule } from '../pipes/pipes.module';

import { PopoverInfoComponent } from './popover-info/popover-info.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HideHeaderDirective,
    PopoverInfoComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    HideHeaderDirective,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatIconModule,
    PipesModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ComponentsModule { }
