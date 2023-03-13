import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckinReq } from 'src/app/xmodels/checkin';
import { CheckinserviceService } from 'src/app/xservices/checkin/checkinservice.service';

import { Capacitor, Plugins } from "@capacitor/core";
import { LocationService } from "src/app//xservices/gservice/location.service"
const { Toast } = Plugins;
import { Geolocation } from '@capacitor/geolocation';
import { MapsAPILoader } from '@agm/core';
import { ToastController } from '@ionic/angular';
import { MissionService } from 'src/app/xservices/mission/mission.service';
import { Detalle } from 'src/app/xmodels/missions';
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  idPV=0;
  dataCheckIn ={};
  token = "";
  lat: any;
  lgn: any;
  checkin : CheckinReq;
  watchId: any;
  isLocationAvailalble=0;
  colorServicio: string;
  nombreCliente: string;
  nombreActividad : string;
  iconServicio: string;
  detalleMision : Detalle;
  ciudad : string;
  pinchoLocation= {
    url: './assets/icon/location-navybluextend.svg',
    scaledSize: {
        width: 40,
        height: 60
    }
  }
  constructor(private checks: CheckinserviceService,
              private route: ActivatedRoute,
              private locationService: LocationService,
              public ngZone: NgZone,
              private router: Router,
              private _mapsAPILoader: MapsAPILoader,
              private toastCtrl: ToastController,
              private srvMission : MissionService) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.token = localStorage.getItem('token');
   
    this.lat = 19.4216458;
    this.lgn = -99.0691779;

    this.dataCheckIn = {
      "idPV": this.idPV,
      "contenido" : {
                    "latitud":this.lat,
                    "longitud":this.lgn
                   }
     };
     this._mapsAPILoader.load().then(() => {
      //do stuff here
      });


    /**
     *  "lat": 19.4216458,
    "lgn": -99.0691779

    "data" = {
      "idPV": 5,
      "contenido":{
                    "latitud":19.4216458,
                    "longitud":-99.0691779
                  }
    };
     */
    //this.srvMission.keepMissionInfo(dataMission);
  }






  async checkIn(){
    //console.log(this.dataCheckIn);

    const chek = await this.checks.checkin(this.token,this.dataCheckIn).subscribe((res) =>{
       console.log(res)
       this.checkin = res;

    })

    this.router.navigate(['start-mission/'+this.idPV])

  }

  ngOnInit() {
    (async () => {
      const data = await this.getMyLocation();
    })();

    const dataMission = {
      "idPV": this.idPV
    };
    const token =  localStorage.getItem('token');
    this.srvMission.getSondeoDetalle(dataMission,token).subscribe((res)=>{
      if(res){
        console.log(res.resp.colorServicio);
        this.nombreCliente = res.resp.nombreCliente;
        this.colorServicio = res.resp.colorServicio;
        this.nombreActividad = res.resp.nombreActividad;
        this.ciudad = res.resp.detalle.ciudad;

      }
    })
  }

  async refrechUbicationLogIn(){
    const data = await this.getMyLocation();
    this.presentToast('Ubicación actualizada');
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
          this.locationService.setLocation(this.lat,this.lgn);
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

   // Little helper
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

  async refreshUbication(){
    const data = await this.getMyLocation();
    this.presentToast("Ubicación actualizada");
  }







}
