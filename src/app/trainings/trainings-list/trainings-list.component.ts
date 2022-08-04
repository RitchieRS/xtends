import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespHabilidad } from 'src/app/xmodels/filter-habilidad';
import { HabilidadesService } from 'src/app/xservices/habilidades/habilidades.service';
import { Informacion, ProfileResp, UserProfile } from '../../xmodels/user';
import { InfoService } from '../../xservices/user/info.service';



@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {
  habilidades: any;
  profileData : ProfileResp;
  habilidadesok: any;
  userResponse: UserProfile;
  avanceCurso: number;
  isLoaded=0;
  colorServicio: string;
  idCliente : string;
  idProyecto : string;
  respuestaHabiliad : RespHabilidad[];
  idsHabilidad = [];
  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private srvProfile : InfoService,
              private srvHabilidad :  HabilidadesService,
           
  ) {
    route.params.subscribe(val => {
      this.ngOnInit() ;
    })

  }

  
  ngOnInit() {
    const token = localStorage.getItem('token');
    this.colorServicio = this.route.snapshot.paramMap.get('colorServicio');
    this.idCliente = this.route.snapshot.paramMap.get('idCliente');
    this.idProyecto = this.route.snapshot.paramMap.get('idProyecto');
  

    this.srvHabilidad.getXProyect(token, this.idCliente, this.idProyecto).subscribe((res) => {

      this.respuestaHabiliad = res.resp;

      this.respuestaHabiliad.forEach(element => {
        console.log(element.idHabilidad)
        this.idsHabilidad.push(element.idHabilidad);
        //const list = this.missionsAvalDatamap.filter(mission => this.filterTypeMap.includes(mission.colorServicio))
      });

      this.srvHabilidad.getAll(token).subscribe((res) =>{
    
        console.log(res);
          
          if(res){
            this.isLoaded=1;
            //this.userResponse = res;
           
            this.habilidades = res.habiliades;
            const list = this.habilidades.filter(habilidad => (this.idsHabilidad.includes(habilidad.idHabilidad)) );
            this.habilidades = list;
            //this.missionsAvalDataAux = list.slice(0,5)
            console.log(this.habilidades);
            console.log(this.isLoaded);


            
          }
        });


    })
  }

}
