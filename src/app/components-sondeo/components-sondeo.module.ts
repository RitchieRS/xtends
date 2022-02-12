import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';

// Materials Angular
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { AbiertaComponent } from './abierta/abierta.component';
import { UnicaRadioComponent } from './unica-radio/unica-radio.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { NumericaComponent } from './numerica/numerica/numerica.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { EmailComponent } from './email/email.component';
import { CargaImagenComponent } from './carga-imagen/carga-imagen.component';
import { FechaComponent } from './fecha/fecha.component';





@NgModule({
  declarations: [
    AbiertaComponent,
    EmailComponent,
    FechaComponent,
    UnicaRadioComponent,
    FotografiaComponent,
    NumericaComponent,
    CarruselComponent,
    CargaImagenComponent
  ],
  exports:[
    AbiertaComponent,
    EmailComponent,
    FechaComponent,
    UnicaRadioComponent,
    FotografiaComponent,
    NumericaComponent,
    CarruselComponent,
    CargaImagenComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatExpansionModule
  ]
})
export class ComponentsSondeoModule { }

