import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../xservices/mission/mission.service';
 
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {

  constructor(private route: ActivatedRoute,private srvMission : MissionService ) { }

  ngOnInit() {
    const idTienda = Number(this.route.snapshot.paramMap.get('idTienda'));
    const idProyecto = Number(this.route.snapshot.paramMap.get('idProyecto'));
    const token = localStorage.getItem('token');
    const dataMission = {
      "idTienda": idTienda,
      "idProyecto": idProyecto
    };
    this.srvMission.getMissionXTiendaProyecto(dataMission,token).subscribe((res) =>{
      console.log(res);
    })

  }

}
