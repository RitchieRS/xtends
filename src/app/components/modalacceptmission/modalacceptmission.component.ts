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
  constructor(public dialog: MatDialog,private route: ActivatedRoute,private srvMission : MissionService) { 
    const idTienda = Number(localStorage.getItem('idTienda'));
    const idProyecto = Number(localStorage.getItem('idProyecto'));
    this.token = localStorage.getItem('token');
    this.dataMission = {
      "idTienda": idTienda,
      "idProyecto": idProyecto
    };
  }
  
  openDialog(){
    
    
  }


  openMissionAccept(){
    console.log(this.dataMission);
    
    this.srvMission.acceptMissionXTiendaProyecto(this.dataMission,this.token).subscribe((res) =>{
      if(res){
        this.message = res.resp.msg;
        this.accepted =true;
        this.dialog.open(DialogacceptmissionComponent, {
          data: { message: this.message },
        })
        
      }
  
    })
  }
}
