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
  ],
  exports:[
    ModalqrComponent,
    ModalcodigoComponent,
    DialogCodigo,
    ClipboardComponent,
  ]
})
export class ReferralsPageModule {}
