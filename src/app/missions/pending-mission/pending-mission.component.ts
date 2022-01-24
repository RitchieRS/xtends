import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from 'src/app/xservices/mission/mission.service';

@Component({
  selector: 'app-pending-mission',
  templateUrl: './pending-mission.component.html',
  styleUrls: ['./pending-mission.component.scss'],
})
export class PendingMissionComponent implements OnInit {

  trainingComplete=true;
  idPV=0;
  constructor(private route: ActivatedRoute,private srvMission : MissionService) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    const dataMission = {
      "idPV": this.idPV
    };
    this.srvMission.keepMissionInfo(dataMission);
   }
  
  ngOnInit() {}

}
