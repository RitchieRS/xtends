import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReqMission } from 'src/app/xmodels/missions';
import { MissionService } from 'src/app/xservices/mission/mission.service';
import { DialogacceptmissionComponent } from './dialogacceptmission/dialogacceptmission.component';

@Component({
  selector: 'app-modalacceptmission',
  templateUrl: './modalacceptmission.component.html',
  styleUrls: ['./modalacceptmission.component.scss'],
})
export class ModalacceptmissionComponent {

  dataMission : ReqMission;
  token: string;
  message = '';
  accepted = false;
  idPV=0;
  TextState="Aceptar Misión";
  constructor(public dialog: MatDialog,private route: ActivatedRoute,private srvMission : MissionService) { 
    this.idPV = Number(localStorage.getItem('idPV'));
    this.token = localStorage.getItem('token');
    this.dataMission = {
      "idPV": this.idPV,
    };
  }
  
  openDialog(){
    
    
  }


  openMissionAccept(){
    console.log(this.dataMission);
    this.TextState = "Espere.."
    this.srvMission.acceptMissionXTiendaProyecto(this.dataMission,this.token).subscribe((res) =>{
      if(res){
        this.message = res.resp.msg;
        this.accepted =true;
        
        this.dialog.open(DialogacceptmissionComponent, {
          data: { message: this.message ,
                  idPV: this.idPV
                },
        })
        
      }
  
    })
  }
}
