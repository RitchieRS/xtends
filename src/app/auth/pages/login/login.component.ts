import { Component, OnInit, NgZone } from '@angular/core';
import { LoginService } from 'src/app/xservices/auth/login.service';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { Capacitor, Plugins } from "@capacitor/core";
import { LocationService } from "src/app//xservices/gservice/location.service"
const { Toast } = Plugins;
import { App } from '@capacitor/app';
import {
  Geolocation
} from '@capacitor/geolocation';
import { HabilidadesService } from 'src/app/xservices/habilidades/habilidades.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  public loginForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  lat: any;
  lng: any;
  watchId: any;
  constructor(private router: Router,
              private login : LoginService,
              private fb : FormBuilder,
              private route :ActivatedRoute,
              public ngZone: NgZone,
              private locationService: LocationService,
              private srvHabilidad :  HabilidadesService) {

    this.lat = 19.4216458;

    this.lng = -99.0691779;

    if(localStorage.getItem('new')==null){
      this.router.navigate(['slide'])
    }

    route.params.subscribe(val => {
      
      App.addListener('backButton', ({ canGoBack }) => {
        App.exitApp();
      });
      
      this.ngOnInit() ;
    })

  }

 
           
  

  ngOnInit() {
    const token =  localStorage.getItem('token');
    
    if(token !== undefined){
      this.router.navigate(['home'])
    }
    this.loginForm = this.fb.group({
      "user": ['', [Validators.required,Validators.minLength(4)]],
      "pass": ['', [Validators.required,Validators.minLength(4)]]
    });

    (async () => {
      const data = await this.getMyLocation()
    })();


    

   

    

  }

  onLogin(): void{


    const formValue = this.loginForm.value;
    formValue.lat = this.lat;
    formValue.lng = this.lng;
    this.locationService.setLocation(this.lat,this.lng);

    this.login.login(formValue).subscribe((res) =>{
        console.log(res);

        if(res['idError']==0){
          console.log(res);
          localStorage.setItem('idUser',res['resp'].usuario.id);
          localStorage.setItem('new','1');
          this.router.navigate(['home'])
        }else{
          this.isSignUpFailed = true;
        }
      })

  }
  logChange(event) {
    console.log(event);
  }
  forgotPage(){
    this.router.navigate(['forgot'])
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
          this.lng = position.coords.longitude
          this.locationService.setLocation(this.lat,this.lng);
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

  async shareElement(){
    console.log("Hola Soy un share");
    await Share.share({
      title: 'Unete al equipo de trabajo xtend',
      text: 'xTendsApp',
      url: 'https://install.appcenter.ms/users/benjas-sl77/apps/xtends/distribution_groups/allusersxtends',
      dialogTitle: 'Comparte con tus amigos.',
    });
  }


}
