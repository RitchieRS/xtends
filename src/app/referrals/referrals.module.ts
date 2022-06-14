import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferralsPageRoutingModule } from './referrals-routing.module';

import { ReferralsPage } from './referrals.page';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogQr, ModalqrComponent } from './modalqr/modalqr.component';
import { DialogCodigo, ModalcodigoComponent } from './modalcodigo/modalcodigo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReferMissionComponent } from './refer-mission/refer-mission.component';
import { DialogReferEnviadoComponent } from './dialog-refer-enviado/dialog-refer-enviado.component';
import { ReferNoRegisComponent } from './refer-no-regis/refer-no-regis.component';


@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReferralsPageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
  ],
  declarations: [
    ReferralsPage,
    ModalqrComponent,
    DialogQr,
    ModalcodigoComponent,
    DialogCodigo,
    ClipboardComponent,
    ReferMissionComponent,
    DialogReferEnviadoComponent,
    ReferNoRegisComponent,
  ],
  exports:[
    ModalqrComponent,
    ModalcodigoComponent,
    DialogCodigo,
    ClipboardComponent,
    ReferMissionComponent,
    DialogReferEnviadoComponent,
    ReferNoRegisComponent,
  ]
})
export class ReferralsPageModule {}
