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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


import { AbiertaComponent } from './abierta/abierta.component';
import { UnicaRadioComponent } from './unica-radio/unica-radio.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { NumericaComponent } from './numerica/numerica/numerica.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { EmailComponent } from './email/email.component';
import { CargaImagenComponent } from './carga-imagen/carga-imagen.component';
import { FechaComponent } from './fecha/fecha.component';
import { SkuComponent } from './sku/sku.component';
import { ComponentsModule } from '../components/components.module';
import { SnumericaComponent } from './snumerica/snumerica.component';
import { SdecimalComponent } from './sdecimal/sdecimal.component';
import { SectionComponent } from './section/section.component';
import { MultipleComponent } from './multiple/multiple.component';
import { GpsComponent } from './gps/gps.component';
import { SunicaRadioComponent } from './sunica-radio/sunica-radio.component';
import { SporcentajeComponent } from './sporcentaje/sporcentaje.component';
import { SfotografiaComponent } from './sfotografia/sfotografia.component';





@NgModule({
  declarations: [
    AbiertaComponent,
    EmailComponent,
    FechaComponent,
    UnicaRadioComponent,
    FotografiaComponent,
    NumericaComponent,
    CarruselComponent,
    CargaImagenComponent,
    SkuComponent,
    SnumericaComponent,
    SdecimalComponent,
    SectionComponent,
    MultipleComponent,
    GpsComponent,
    SunicaRadioComponent,
    SporcentajeComponent,
    SfotografiaComponent
  ],
  exports:[
    AbiertaComponent,
    EmailComponent,
    FechaComponent,
    UnicaRadioComponent,
    FotografiaComponent,
    NumericaComponent,
    CarruselComponent,
    CargaImagenComponent,
    SkuComponent,
    SnumericaComponent,
    SdecimalComponent,
    SectionComponent,
    MultipleComponent,
    GpsComponent,
    SunicaRadioComponent,
    SporcentajeComponent,
    SfotografiaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    ComponentsModule
  ]
})
export class ComponentsSondeoModule { }

