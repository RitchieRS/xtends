
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

// Componentes Xtend
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ZonesComponent } from './zones/zones.component';
import { HideHeaderDirective } from './header/hide-header.directive';
import { PipesModule } from '../pipes/pipes.module';
import { PopoverInfoComponent } from './popover-info/popover-info.component';
import { ModalmissionComponent } from './modalmission/modalmission.component';
import { DialogmissionComponent } from './modalmission/dialogmission/dialogmission.component';
import { ModalacceptmissionComponent } from './modalacceptmission/modalacceptmission.component';
import { DialogacceptmissionComponent } from './modalacceptmission/dialogacceptmission/dialogacceptmission.component';
import { ModalcheckinComponent } from './modalcheckin/modalcheckin.component';
import { DialogcheckinComponent } from './modalcheckin/dialogcheckin/dialogcheckin.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SocialShareBtnComponent } from './social-share-btn/social-share-btn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrintcredentialComponent } from './printcredential/printcredential.component';
import { FirmComponent } from './firm/firm.component';
<<<<<<< HEAD
import { PreloadComponent } from './preload/preload.component';
=======
import { FotoIdComponent } from './foto-id/foto-id.component';
import { FotoDomComponent } from './foto-dom/foto-dom.component';
>>>>>>> 02bff811b4e92ca2ff806fab7fe028b8357940e6




@NgModule({
  declarations: [
    FooterComponent,
    SocialShareBtnComponent,
    HeaderComponent,
    HeaderTwoComponent,
    ZonesComponent,
    HideHeaderDirective,
    PopoverInfoComponent,
    ModalmissionComponent,
    DialogmissionComponent,
    ModalacceptmissionComponent,
    DialogacceptmissionComponent,
    ModalcheckinComponent,
    DialogcheckinComponent,
    PrintcredentialComponent,
    FirmComponent,
<<<<<<< HEAD
    PreloadComponent
=======
    FotoIdComponent,
    FotoDomComponent 
>>>>>>> 02bff811b4e92ca2ff806fab7fe028b8357940e6
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    HeaderTwoComponent,
    ZonesComponent,
    HideHeaderDirective,
    PopoverInfoComponent,
    ModalmissionComponent,
    DialogmissionComponent,
    ModalacceptmissionComponent,
    DialogacceptmissionComponent,
    ModalcheckinComponent,
    DialogcheckinComponent,
    SocialShareBtnComponent,
    PrintcredentialComponent,
    FirmComponent,
<<<<<<< HEAD
    PreloadComponent
=======
    FotoIdComponent,
    FotoDomComponent 
>>>>>>> 02bff811b4e92ca2ff806fab7fe028b8357940e6
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatIconModule,
    PipesModule,
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
    SignaturePadModule,
  ]
})
export class ComponentsModule { }
