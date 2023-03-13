import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habilidades } from 'src/app/xmodels/missions';
import { Detalle } from 'src/app/xmodels/sondeo';

import { MissionService } from 'src/app/xservices/mission/mission.service';

@Component({
  selector: 'app-pending-mission',
  templateUrl: './pending-mission.component.html',
  styleUrls: ['./pending-mission.component.scss'],
})
export class PendingMissionComponent implements OnInit {

  trainingComplete=true;
  idPV=0;
  colorServicio: string;
  nombreCliente: string;
  nombreActividad : string;
  iconServicio: string;
  detalleMision : Detalle;
  habilidades: Habilidades[];
  cadena: string;
  canal :string;
  ciudad : string;
  estado : string;
  
  constructor(private route: ActivatedRoute,private srvMission : MissionService) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.colorServicio = this.route.snapshot.paramMap.get('colorServicio');
    this.nombreCliente = this.route.snapshot.paramMap.get('nombreCliente');
    this.nombreActividad = this.route.snapshot.paramMap.get('nombreActividad');
    const dataMission = {
      "idPV": this.idPV
    };
    
    this.srvMission.keepMissionInfo(dataMission);
   }
  
  ngOnInit() {
    const dataMission = {
      "idPV": this.idPV
    };
    const token =  localStorage.getItem('token');
    this.srvMission.getSondeoDetalle(dataMission,token).subscribe((res)=>{
      if(res){
        console.log(res);
        this.detalleMision = res.resp.detalle;
        this.canal = this.detalleMision.canal;
        this.cadena =this.detalleMision.cadena;
        this.nombreActividad  = res.resp.nombreActividad;
        this.iconServicio = res.resp.iconServicio;
        this.habilidades = res.resp.habilidades;

        

      }
    })
  }

}
