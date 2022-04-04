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

import { SectionComponent } from '../components-inf/section/section.component';
import { AbiertaComponent } from '../components-inf/abierta/abierta.component';
import { UnicaRadioComponent } from '../components-inf/unica-radio/unica-radio.component';
import { MultipleComponent } from '../components-inf/multiple/multiple.component';
import { FechaComponent } from '../components-inf/fecha/fecha.component';
import { EmailComponent } from '../components-inf/email/email.component';
import { SunicaRadioComponent } from '../components-inf/sunica-radio/sunica-radio.component';
import { NumericaComponent } from '../components-inf/numerica/numerica.component';
import { CarruselComponent } from '../components-inf/carrusel/carrusel.component';
import { CargaImagenComponent } from '../components-inf/carga-imagen/carga-imagen.component';
import { FotografiaComponent } from '../components-inf/fotografia/fotografia.component';
import { GpsComponent } from '../components-inf/gps/gps.component';
import { SkuComponent } from '../components-inf/sku/sku.component';
import { SnumericaComponent } from '../components-inf/snumerica/snumerica.component';
import { SporcentajeComponent } from '../components-inf/sporcentaje/sporcentaje.component';
import { SdecimalComponent } from '../components-inf/sdecimal/sdecimal.component';
import { SfotografiaComponent } from '../components-inf/sfotografia/sfotografia.component';


@NgModule({
  declarations: [
    SectionComponent,
    AbiertaComponent,
    UnicaRadioComponent,
    MultipleComponent,
    FechaComponent,
    EmailComponent,
    NumericaComponent,
    CarruselComponent,
    CargaImagenComponent,
    FotografiaComponent,
    GpsComponent,
    SkuComponent,
    SunicaRadioComponent,
    SnumericaComponent,
    SporcentajeComponent,
    SdecimalComponent,
    SfotografiaComponent,
  ],
  exports:[
    SectionComponent,
    AbiertaComponent,
    UnicaRadioComponent,
    MultipleComponent,
    FechaComponent,
    EmailComponent,
    NumericaComponent,
    CarruselComponent,
    CargaImagenComponent,
    FotografiaComponent,
    GpsComponent,
    SkuComponent,
    SunicaRadioComponent,
    SnumericaComponent,
    SporcentajeComponent,
    SdecimalComponent,
    SfotografiaComponent,
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
  ]
})
export class ComponentsInformativoModule { }

