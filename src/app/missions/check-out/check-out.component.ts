import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutReq } from 'src/app/xmodels/checkout';
import { CheckoutserviceService } from 'src/app/xservices/checkout/checkoutservice.service';

import { Capacitor, Plugins } from "@capacitor/core";
import { LocationService } from "src/app//xservices/gservice/location.service"
const { Toast } = Plugins;
import { Geolocation } from '@capacitor/geolocation';
import { MapsAPILoader } from '@agm/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {

  idPV=0;
  dataCheckOut ={};
  token = "";
  lat: any;
  lgn: any;
  checkout : CheckoutReq;
  watchId: any;
  isLocationAvailalble=0;
  pinchoLocation= {
    url: './assets/icon/location-navybluextend.svg',
    scaledSize: {
        width: 40,
        height: 60
    }
  };

  constructor(
    private checks: CheckoutserviceService,
    private route: ActivatedRoute,
    private locationService: LocationService,
    public ngZone: NgZone,
    private router: Router,
    private _mapsAPILoader: MapsAPILoader,
    private toastCtrl: ToastController,
  ) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.token = localStorage.getItem('token');
    this.lat = 19.4216458;
    this.lgn = -99.0691779;

    this.dataCheckOut = {
      "idPV": this.idPV,
      "contenido" : {
                    "latitud":this.lat,
                    "longitud":this.lgn
                   }
     };
     this._mapsAPILoader.load().then(() => {});
  }

  missionComplete(){
    console.log(this.dataCheckOut);
    this.router.navigate(['mission-complete/'+this.idPV])
    this.checks.checkout(this.token,this.dataCheckOut).subscribe((res) =>{
       console.log(res)
       this.checkout = res;
    });

  }

  ngOnInit() {
    (async () => {
      const data = await this.getMyLocation()
    })();
  }

  //Btn refresh ubication
  async refreshUbication(){
    const data = await this.getMyLocation();
    this.presentToast("Ubicación actualizada");
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
        });
      }
    }
  }


  async postGPSPermission(canUseGPS: boolean) {

    if (canUseGPS) { this.watchPosition(); }
    else {
      await Toast.show({
        text: 'Please turn on GPS to get location'
      });
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
          this.locationService.setLocation(this.lat,this.lgn);
          this.clearWatch();

        });
      });
      //alert(`Try Whatch position${this.watchId}`);
    }
    catch (err) { alert(`err${err}`); }
  }

  clearWatch() {
    if (this.watchId != null) {
      Geolocation.clearWatch({ id: this.watchId });
    }
  }


  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      color: 'navybluextend',
      position: 'top',
      mode : 'ios',
    });
    toast.present();
  }







}
