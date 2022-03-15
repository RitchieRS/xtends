import { Component, OnInit } from '@angular/core';
import { Home, HomeLocation, Section1, Section1Content } from '../xmodels/home';
import { AMission, ContentMission, MisionSection1, Mission, RespMission } from '../xmodels/missions';
import { HomeService } from '../xservices/home/home.service';
import { MissionService } from '../xservices/mission/mission.service';

@Component({
  selector: 'app-active-missions',
  templateUrl: './active-missions.page.html',
  styleUrls: ['./active-missions.page.scss'],
})
export class ActiveMissionsPage implements OnInit {

  missionAval : MisionSection1;
  //missionsAvalData : AMission[];
  dataAMission : AMission;
  listMission : ContentMission[];
  reqHome : string;
  location: HomeLocation;
  lat:any;
  lng:any;
  listMissionlength=0;

  constructor(private mision : MissionService) { }

  ngOnInit() {

    this.lat = Number(localStorage.getItem('lat'));
    this.lng = Number(localStorage.getItem('lng'));
    this.location = {
      "lat" : Number(this.lat),
      "lgn" : Number(this.lng)
    }
    this.reqHome = localStorage.getItem('token');
    this.mision.getMissionXuser(this.reqHome).subscribe((res) =>{
      console.log(res);
        if(res){
         this.dataAMission =  res;
         /* Misiones Disponibles*/
           if(this.dataAMission.section1.content.length>=1){
            this.missionAval = this.dataAMission.section1;
            this.listMission = this.missionAval.content;
            this.listMissionlength = this.listMission.length;

             console.log(this.missionAval.content);
          }
        //console.log(this.dataHome.section1);

       // console.log(this.dataHome);
       }
     })
  }



}
