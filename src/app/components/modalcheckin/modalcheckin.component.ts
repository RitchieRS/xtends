import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute,ActivationStart,Router, RouterOutlet, } from '@angular/router';
import { CheckinReq } from 'src/app/xmodels/checkin';
import { MissionService } from 'src/app/xservices/mission/mission.service';
import { DialogcheckinComponent } from './dialogcheckin/dialogcheckin.component';

@Component({
  selector: 'app-modalcheckin',
  templateUrl: './modalcheckin.component.html',
  styleUrls: ['./modalcheckin.component.scss'],
})
export class ModalcheckinComponent {

  
  dataChekIn : CheckinReq;
  token: string;
  message = '';
  accepted = false;
  idPV=0;
  trainingComplete=true;
  
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  constructor(public dialog: MatDialog,private route: ActivatedRoute,private srvMission : MissionService,private router: Router) { 
    this.idPV = Number(localStorage.getItem('idPV'));
    this.token = localStorage.getItem('token');
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });
    
  }
  
  

  openDialog(){
    this.dialog.open(DialogcheckinComponent)
  }
  checkinPending(): void{
    console.log("checkin")
    //this.dialog.closeAll();
    this.router.navigate(['check-in/'+this.idPV])
  }
}
