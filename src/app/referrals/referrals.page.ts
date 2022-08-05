import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionsRef } from '../xmodels/refered';
import { LoginService } from '../xservices/auth/login.service';
import { LocationService } from '../xservices/gservice/location.service';
import { ReferedService } from '../xservices/refered/refered.service';
import { Capacitor, Plugins } from "@capacitor/core";
const { Toast } = Plugins;
import {
  Geolocation
} from '@capacitor/geolocation';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.page.html',
  styleUrls: ['./referrals.page.scss'],
})
export class ReferralsPage implements OnInit {

  token: string;
  coder: string;
  code: string;
  qrimage: string;

  misionesRe: any;

  srvRefTest: any;
  laVenenoza: any;
  lat: any;
  lgn: any;
  watchId: any;
  constructor(private router: Router,
              private login : LoginService,
              public ngZone: NgZone,
              private srvRefe: ReferedService,
              private locationService: LocationService) {

                const token =  localStorage.getItem('token');
                if(token == undefined ||  token === null ){
                  this.router.navigate(['auth'])
                }
              

    this.lat = 19.4216458;

    this.lgn = -99.0691779;


    }
  

  ngOnInit() {
    this.token = localStorage.getItem('token');

    var position = {
      lat:this.lat,
      lgn: this.lgn
    }
    this.srvRefe.getCodeRefered(this.token,position).subscribe((res) =>{
     this.code = res.resp.codigoRecomendado;
     this.qrimage = res.resp.urlQR;
     localStorage.setItem('referido', this.code);

     this.misionesRe = Object.values(res.resp.misiones);
     console.log(this.misionesRe);

    //  this.srvRefe.getMissRefPorIdPV(this.token).subscribe(() =>{

    //  });
    });
  }


  async getMyLocation() {

    const hasPermission = await this.locationService.checkGPSPermission();
    if (hasPermission) {
      if (Capacitor.isNative) {

        const canUseGPS  =  await this.locationService.askToTurnOnGPS();
        this.postGPSPermission(canUseGPS);
      }
      else { this.postGPSPermission(true); }
    }
    else {

      const permission = await this.locationService.requestGPSPermission();

      if (permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION') {
        if (Capacitor.isNative) {

          const canUseGPS = await this.locationService.askToTurnOnGPS();
          this.postGPSPermission(canUseGPS);
        }
        else { this.postGPSPermission(true); }
      }
      else {
        await Toast.show({
          text: 'User denied location permission'
        })
      }
    }
  }

  async postGPSPermission(canUseGPS: boolean) {

    if (canUseGPS) { this.watchPosition(); }
    else {
      await Toast.show({
        text: 'Please turn on GPS to get location'
      })
    }
  }
  async watchPosition() {

    //alert(`Try Whatch position`);
    try {
     // alert(`into Try Whatch position`);
      this.watchId = Geolocation.watchPosition({}, (position, err) => {
        this.ngZone.run(() => {
          if (err) { alert(`err${err}`); return; }
          this.lat = position.coords.latitude;
          this.lgn = position.coords.longitude
          //this.locationService.setLocation(this.lat,this.lng);
          this.clearWatch();

        })
      })
      //alert(`Try Whatch position${this.watchId}`);
    }
    catch (err) { alert(`err${err}`); }
  }

  clearWatch() {
    if (this.watchId != null) {
      Geolocation.clearWatch({ id: this.watchId });
    }
  }



}
