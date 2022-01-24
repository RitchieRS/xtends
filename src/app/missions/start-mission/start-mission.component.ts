import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckinserviceService } from 'src/app/xservices/checkin/checkinservice.service';
import { LocationService } from 'src/app/xservices/gservice/location.service';
import { MissionService } from 'src/app/xservices/mission/mission.service';
import { DialogCaptureproductinfoComponent } from '../modal-captureproductinfo/dialog-captureproductinfo/dialog-captureproductinfo.component';

@Component({
  selector: 'app-start-mission',
  templateUrl: './start-mission.component.html',
  styleUrls: ['./start-mission.component.scss'],
})
export class StartMissionComponent  {

  productos = [
    {
     nombre:'Producto uno',
     pres:'320 mil',
     presencia:'checkmark-circle',
     color: 'greenxtend'
    },
    {
      nombre:'Producto',
      pres:'500 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto dos',
      pres:'600 mil',
      presencia:'close-circle',
      color: 'navybluextend'
     },
     {
      nombre:'Producto tres',
      pres:'700 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto cuatro',
      pres:'800 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto cuatro',
      pres:'1000 mil',
      presencia:'close-circle',
      color: 'navybluextend'
     },
  ]

  idPV =0;
  token = "";
  lat:number;
  lgn:number;
  dataSondeo={};

  constructor(private checks:CheckinserviceService,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private router: Router,
    public dialog: MatDialog,
    public servMission : MissionService) { 
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.token = localStorage.getItem('token');
    this.lat = 19.4216458;
    this.lgn = 99.0691779;
    this.dataSondeo={
      "idPV" :  this.idPV
    }

    this.servMission.getSondeoXmission(this.token,this.dataSondeo).subscribe((res) =>{
      console.log(res)
      this.router.navigate(['start-mission/'+this.idPV])
   })

  }



  openDialog(){
    this.dialog.open(DialogCaptureproductinfoComponent);
  }

}
