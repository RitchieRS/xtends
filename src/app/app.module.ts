import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes Xtend
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AuthModule } from './auth/auth.module';
import { MissionModule } from './mission/mission.module';
import { WalletModule } from './wallet/wallet.module';
import { ProfileModule } from './profile/profile.module';
import { PipesModule } from './pipes/pipes.module';
import { SlidePageModule } from './slide/slide.module';
import { XtendLevelsModule } from './xtend-levels/xtend-levels.module';
import { ComponentsSondeoModule } from './components-sondeo/components-sondeo.module';
import { ComponentsInformativoModule } from './components-inf/components-info.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TrainingsModule } from './trainings/trainings.module';
import { HelpPageModule } from './help/help.module';
import { ReferralsPageModule } from './referrals/referrals.module';

// Google Materials Angular
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MissionsModule } from './missions/missions.module';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AuthGuard } from './xservices/authguard/auth.guard.service';



//import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
  [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    ComponentsModule,
    ComponentsSondeoModule,
    ComponentsInformativoModule,
    AuthModule,
    RouterModule,
    MissionModule,
    MissionsModule,
    WalletModule,
    ProfileModule,
    XtendLevelsModule,
    SlidePageModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule,
    PipesModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTabsModule,
    SignaturePadModule,
    ClipboardModule,
    TrainingsModule,
    HelpPageModule,
    ReferralsPageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXg0fE1pWSZNf4ARJsb303OwYJGCaJT_4',
    }),
  ],
  providers: [
    BarcodeScanner,
    SocialSharing,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
