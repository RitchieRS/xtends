import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HomeService  } from 'src/app/xservices/home/home.service';
import { Router } from '@angular/router';
import { Home, Section1, Section1Content,Section3,Section3Content,Section2,Section2Content, HomeLocation, Section4Content, Section4 } from '../xmodels/home';
import { LoginService } from '../xservices/auth/login.service';
import { TransitionCheckState } from '@angular/material/checkbox';
import { DialogmissionComponent } from '../components/modalmission/dialogmission/dialogmission.component';
import { MatDialog } from '@angular/material/dialog';
import { StorageHelperService } from '../xservices/storage/storage-helper.service';
import { InfoService } from '../xservices/user/info.service';
import { toTypeScript } from '@angular/compiler';
import { PopoverController} from '@ionic/angular';
import { PopoverFiltermapComponent } from '../components/popover-filtermap/popover-filtermap.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  currentIndex = 5;
  itemsMission = [...Array(this.currentIndex).keys()];
  missions:Section1;
  isLoaded=0;
  missionsData :Section1Content[];
  banner:Section2;
  bannerData :Section2Content[];
  missionAval:Section3;
  missionsAvalData :Section3Content[];
  missionsAvalDataFil :Section3Content[];
  missionsAvalDataAux :Section3Content[];
  missionAvalmap:Section4;
  missionsAvalDatamap :Section4Content[];
  missionsAvalDataAuxmap :Section4Content[];
  lat:any;
  lng:any;
  options: string[] = [];
  pinchoLocation= {
    url: './assets/icon/location-navybluextend.svg',
    scaledSize: {
        width: 40,
        height: 60
    }
  }
  filterType:any;
  filterTypeMap=[];


  panelOpenState = false;
  dataHome : Home;
  reqHome : string;
  isMissionsOn=false;
  location:HomeLocation;
  renderOptions = {
    suppressMarkers: true,
  }


  constructor(private homeService : HomeService,
              private auth : LoginService,
              public dialog: MatDialog,
              private storage: StorageHelperService,
              private srvInf: InfoService,
              private popoverCtrl: PopoverController) {

              }

  async ngOnInit() {

    this.lat = Number(localStorage.getItem('lat'));
    this.lng = Number(localStorage.getItem('lng'));
    console.log(this.lat);
    console.log(this.lng );
    console.log(this.auth.isLogged)
    this.auth.isLogged.subscribe( (log:any)=>{
        console.log(log)
    })
    this.filterType=[];
    this.storage.getObject('filter').then((filter: any) => {
      for (let i = 0; i < filter.length; i++) {
        console.log(filter[i]);
        this.filterType.push( filter[i]);
      }
        //this.filterType.push({"nombreActividad" : filter});
    });

   await this.storage.getObject('filter-map').then((filterMap: any) => {

      this.filterTypeMap =  filterMap;
      /*for (let i = 0; i < filterMap.length; i++) {
        console.log(filterMap[i]);
        this.filterTypeMap.push(filterMap[i]);
      }*/

    });
    console.log(this.filterTypeMap);


    this.location = {
      "lat" : Number(this.lat),
      "lgn" : Number(this.lng)
    }
    this.reqHome = localStorage.getItem('token');
    this.loadZones()
    this.loadDataMission();
  }

  seeMore(){
    this.currentIndex += 5;
    console.log(this.currentIndex);
    this.missionsAvalDataAux  = this.missionsAvalData;
    this.missionsAvalDataAux = this.missionsAvalDataAux.slice(0,this.currentIndex);
  }


  actionPin(mission : any){
    console.log("Hola soy un pincho");
    console.log(mission);
    this.dialog.open(DialogmissionComponent,{
                                            data:{
                                              canal: mission.canal,
                                              ciudad: mission.ciudad,
                                              colorServicio: mission.colorServicio,
                                              estado: mission.estado,
                                              idPV: mission.idPV,
                                              sucursal: mission.sucursal,
                                              tiempo: mission.tiempo,
                                              nombreActividad: mission.nombreActividad
                                            }
                                          });

   }



  tipoServicio(tipo:string):any{

   // console.log(tipo);
    let type={
      color:"",
      logo:""
    };
    switch(tipo) {
      case 'skybluextend': {
        type.color='#229bd6';
        type.logo="promotoria.svg"
        break;
      }
      /*case  "Mistery": {
        type.color='#161949';
        type.logo="mystery.svg"
        break;
      }*#020c3a*/
      case  'navybluextend': {
        type.color='#020c3a';
        type.logo="mystery.svg"
        break;
      }
      case 'purplextend': {
        type.color='#825aa5';
        type.logo="demostrador.svg"
        break;
      }
      case 'greenxtend': {
        type.color='#90c04e';
        type.logo="anaqueleo.svg"
        break;
      }
      default: {
        type.color='#020c3a';
        type.logo="anaqueleo.svg"
      }

      break;
      }
      return type;
    }

    pincho(tipo:string):any{
      console.log(tipo);
      let type = {
            url: './assets/icon/location-redxtend.svg',
            scaledSize: {
                width: 40,
                height: 60
            }
          };
      switch(tipo) {
        case "redxtend": {
          type.url='./assets/icon/location-redxtend.svg';
          break;
        }
        case "skybluextend": {
          type.url='./assets/icon/location-skybluextend.svg';
          break;
        }
        case  "greenxtend": {
          type.url='./assets/icon/location-greenxtend.svg';
          break;
        }
        case  "navybluextend": {
          type.url='./assets/icon/location-navybluextend.svg';
          break;
        }
        case "purplextend": {
          type.url='./assets/icon/location-purplextend.svg';
          break;
        }
       
        default: {

        }
        break;
        }
        return type;
      }


     loadZones():void{
        this.srvInf.getCitiesInformation(this.reqHome).subscribe((res)=>{
          console.log(res);
          this.storage.setObject('zone', res);
         })
      }
      loadDataMission():void{
        this.homeService.getDataHome(this.reqHome, this.location ).subscribe((res) =>{
          console.log(res);
          this.isLoaded=1;
           if(res){
            this.dataHome=  res;
            //console.log(this.dataHome);
            /* Misiones Activas*/
            if(this.dataHome.section1.content.length>=1){
             this.missions = this.dataHome.section1;
             this.missionsData = this.dataHome.section1.content;
             console.log(this.missionsData);
            }
            /* Banners*/
            if(this.dataHome.section2.content.length>=1){
              this.banner = this.dataHome.section2;
              this.bannerData = this.dataHome.section2.content;
              console.log(this.missionsData);
             }
            /* Misiones Disponibles*/
            if(this.dataHome.section3.content.length>=1){

              this.missionAval = this.dataHome.section3;
              this.missionsAvalDataFil = this.dataHome.section3.content;
              //values.filter(t=>t.category ==='Science');
              this.missionsAvalData = this.dataHome.section3.content;
             //Filter Type Mission
             if(this.filterType.length>0){
              console.log("filter")
              const list = this.missionsAvalData.filter(mission => this.filterType.includes(mission.colorServicio))
              this.missionsAvalDataAux = list.slice(0,5)
             }else{
              this.missionsAvalDataAux = this.missionsAvalData.slice(0,5)
             }






             }
             
             /* Misiones Disponibles*/
             this.filterTypeMap = new Array();
            if(this.dataHome.section4.content.length>=1){
              
              this.missionAvalmap = this.dataHome.section4;
              

              this.missionsAvalDatamap = this.dataHome.section4.content;
              if(this.filterTypeMap.length>0){
                console.log("filter Map");
                console.log(this.filterTypeMap)
                const list = this.missionsAvalDatamap.filter(mission => this.filterTypeMap.includes(mission.colorServicio))
                this.missionsAvalDataAuxmap = list;
                this.missionsAvalDatamap = this.missionsAvalDataAuxmap;

                console.log("Section 4");
                console.log(this.missionsAvalDatamap );
               }
               console.log( this.missionAvalmap);
              this.missionAvalmap.content.forEach(element => {
               
                element.color = this.pincho(element.colorServicio)
              });

              console.log(this.missionsAvalDatamap);
            }
            //console.log(this.dataHome.section1);

           // console.log(this.dataHome);
           }
        })
      }

      async popoverFilterMap(ev: any) {
        const popover = await this.popoverCtrl.create({
          component: PopoverFiltermapComponent,
          event: ev,
          translucent: false,
          mode: 'ios',
          cssClass:'popOver'
        });
        await popover.present();
      }


}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'actividad',
    pure: false
})
export class Actividad implements PipeTransform {


  transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.nombreActividad.indexOf(filter.nombreActividad) !== -1);
    }


}
