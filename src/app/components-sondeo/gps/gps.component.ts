import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';
import { Capacitor, Plugins } from "@capacitor/core";
import { LocationService } from "src/app//xservices/gservice/location.service"
const { Toast } = Plugins;
import { Geolocation } from '@capacitor/geolocation';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent implements OnInit {






  @Input() dependePregunta: number;
  @Input() dependeRespuesta: number;
  @Input() idPregunta: number;
  @Input() maximo: number;
  @Input() minimo: number;
  @Input() obligatorio: number;
  @Input() opciones: string[];
  @Input() orden: number;
  @Input() pregunta: string;
  @Input() puntaje: number;
  @Input() tipo: string;
  @Input() urlImage: string;
  @Input() idSondeo: string;
  @Input() checkCompleteChild: (idPregunta: number, isValid:number, idRespuesta:number ) => void;
  isValid = 0;
  idStrQuest = "";
  watchId: any;
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    valid:0,
    obligatorio : 0,
    idOpcion : 0
  }
  dataCheckIn ={};
  lat: any;
  lgn: any;
  respuestaStr:string;
  constructor(
              private storage: StorageHelperService,
              private locationService: LocationService,
              public ngZone: NgZone,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.idStrQuest =  this.idSondeo + '||' + this.idPregunta.toString();
    console.log(this.idStrQuest);
    this.storage.getObject(this.idStrQuest).then((question: any) => {
      console.log(question);
     this.respuestaStr = question.respuesta;
     this.isValid = this.respuestaStr.length>0 ? 1 : 0;
     
     this.respuestas = {
      idPregunta:this.idStrQuest,
      tipo:      this.tipo,
      respuesta: this.respuestaStr,
      valid: this.isValid,
      obligatorio: this.obligatorio,
      idOpcion:0
    }
    this.checkCompleteChild(this.idPregunta,this.isValid,this.respuestas.idOpcion);
    this.storage.setObject(this.idStrQuest,this.respuestas);
    });

    this.lat = 19.4216458;
    this.lgn = -99.0691779;
  }

  submit(){
    (async () => {
      const data = await this.getMyLocation();
      if(this.lat){
        this.respuestas.respuesta = this.lat.toString()+ ','+ this.lgn.toString();
        this.isValid=1;
        this.respuestas.obligatorio = this.obligatorio;
        this.checkCompleteChild(this.idPregunta,this.isValid,this.respuestas.idOpcion);
        this.storage.setObject(this.idStrQuest,this.respuestas);
        this.presentToast("Ubicaciòn actualizada");
      }else{
        this.isValid=0;
      }
    })();

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




}
