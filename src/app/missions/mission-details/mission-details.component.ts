import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../xservices/mission/mission.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
})
export class MissionDetailsComponent implements OnInit {

  constructor(
    private dataDetalleMissions: MissionService
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.dataDetalleMissions.getDetailMission(token)
    .subscribe( dataDetalleMissions => {
      console.log(dataDetalleMissions);
    });
  }


  async mostrarDetalleSondeos(){
    const token = localStorage.getItem('token');
    this.dataDetalleMissions.getDetailMission(token)
    .subscribe( dataDetalleMissions => {
      console.log(dataDetalleMissions);
    });
  }

}
