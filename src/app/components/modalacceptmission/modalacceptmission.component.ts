import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReqMission, ResMissionAccepted } from 'src/app/xmodels/missions';
import { MissionService } from 'src/app/xservices/mission/mission.service';
import { DialogcheckinComponent } from '../modalcheckin/dialogcheckin/dialogcheckin.component';
import { DialogacceptmissionComponent } from './dialogacceptmission/dialogacceptmission.component';

@Component({
  selector: 'app-modalacceptmission',
  templateUrl: './modalacceptmission.component.html',
  styleUrls: ['./modalacceptmission.component.scss'],
})
export class ModalacceptmissionComponent implements OnInit{

  
  
  @Input() idPV : number ;
  dataMission : ReqMission;
  token:string;
  message = '';
  isMission : ResMissionAccepted;
  accepted = false;
  TextState="Aceptar Misión";
  constructor(public dialog: MatDialog,private route: ActivatedRoute,private srvMission : MissionService) { 
    //this.idPV = Number(localStorage.getItem('idPV'));
    
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.dataMission = {
      "idPV": this.idPV,
    };
  }
  
  openDialog(){
    
    
  }


  async openMissionAccept(){
    console.log(this.dataMission);
    this.TextState = "Espere.."
    await this.srvMission.acceptMissionXTiendaProyecto(this.dataMission,this.token).subscribe((res) =>{
      this.isMission = res; 
      if(this.isMission.idError==0){ 
        
        this.message = res.resp.msg;
        this.accepted =true;
        
        this.dialog.open(DialogacceptmissionComponent, {
          data: { message: this.message ,
                  idPV: this.idPV
                },
        })
        
      }else{
        
        this.dialog.open(DialogcheckinComponent)

      }
  
    })
  }
}
