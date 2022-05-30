import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  @Input() colorServicio:string;
  @Input() idProyecto:string;
  @Input() idCliente : string;
  dataMission : ReqMission;
  token:string;
  message = '';
  isMission : ResMissionAccepted;
  accepted = false;
  TextState="Aceptar Misión";
  constructor(public dialog: MatDialog,private route: ActivatedRoute,
              private srvMission : MissionService,
              private toastCtrl: ToastController,
              private router: Router) { 
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

    // Little helper
  async presentToast(text) {
      const toast = await this.toastCtrl.create({
        message: text,
        duration: 3000,
        color: 'navybluextend',
        position: 'top',
        mode : 'ios',
  
      });
      toast.present();
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
                  idPV: this.idPV,
                  colorServicio: this.colorServicio
                },
        })
        
      }
      else if(this.isMission.idError==2){
        this.presentToast("Esta Misión ya esta en Mis misiones");
        this.router.navigate(['start-mission/'+this.idPV]);
      }
      else{
        //MANDA A HABILIDADES$
        this.dialog.open(DialogcheckinComponent,{data: { 
          colorServicio: this.colorServicio,
          idProyecto: this.idProyecto,
          idCliente: this.idCliente
        }})

      }
  
    })
  }
}
