import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReqMission } from 'src/app/xmodels/missions';
import { MissionService } from 'src/app/xservices/mission/mission.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-dialogacceptmission',
  templateUrl: './dialogacceptmission.component.html',
  styleUrls: ['./dialogacceptmission.component.scss'],
})
export class DialogacceptmissionComponent implements OnInit {
  dataMission : ReqMission;
  token: string;
  message = '';
  accepted = false;

  constructor(private route: ActivatedRoute,private srvMission : MissionService,private modalController: ModalController) {
    const idTienda = Number(localStorage.getItem('idTienda'));
    const idProyecto = Number(localStorage.getItem('idProyecto'));
    this.token = localStorage.getItem('token');
    this.dataMission = {
      "idTienda": idTienda,
      "idProyecto": idProyecto
    };

   }

  ngOnInit() {

    
  }

  acceptMission(){
    console.log(this.dataMission);
  
    this.srvMission.acceptMissionXTiendaProyecto(this.dataMission,this.token).subscribe((res) =>{
      if(res){
        this.message = res.resp.msg;
        this.accepted =true;
        
      }
  
    })
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }



}
