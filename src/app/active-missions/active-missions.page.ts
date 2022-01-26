import { Component, OnInit } from '@angular/core';
import { Home, HomeLocation, Section1, Section1Content } from '../xmodels/home';
import { HomeService } from '../xservices/home/home.service';

@Component({
  selector: 'app-active-missions',
  templateUrl: './active-missions.page.html',
  styleUrls: ['./active-missions.page.scss'],
})
export class ActiveMissionsPage implements OnInit {

  missionAval:Section1;
  missionsAvalData :Section1Content[];
  missionsAvalDataAux :Section1Content[];
  dataHome : Home;
  reqHome : string;
  location:HomeLocation;
  lat:any;
  lng:any;

  constructor(private homeService : HomeService) { }

  ngOnInit() {

    this.lat = Number(localStorage.getItem('lat'));
    this.lng = Number(localStorage.getItem('lng'));
    this.location = {
      "lat" : Number(this.lat),
      "lgn" : Number(this.lng)
    }
    this.reqHome = localStorage.getItem('token');
    this.homeService.getDataHome(this.reqHome, this.location ).subscribe((res) =>{
      console.log(res);
       if(res){
        this.dataHome=  res;
     
         /* Misiones Disponibles*/
         if(this.dataHome.section1.content.length>=1){
          this.missionAval = this.dataHome.section1;
          this.missionsAvalData = this.dataHome.section1.content;
          this.missionsAvalDataAux = this.missionsAvalData.slice(0,5);
         // console.log(this.missionsAvalData);
         }
        //console.log(this.dataHome.section1);

       // console.log(this.dataHome);
       }
    })
  }

  

}
