import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private srvProfile : InfoService,
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.colorServicio = this.route.snapshot.paramMap.get('colorServicio');
    this.srvProfile.getProfileInformation(token).subscribe((res) =>{
      console.log(res);
      
      if(res){
        this.isLoaded=1;
        this.userResponse = res;
        this.profileData = this.userResponse.resp;
        this.habilidades = this.profileData.capacitacion.habilidades;
        const list = this.habilidades.filter(habilidad => (habilidad.colorServicio == this.colorServicio  && habilidad.colorServicio !="" ) );
        this.habilidades = list;
        //this.missionsAvalDataAux = list.slice(0,5)
        console.log(this.habilidades);
        console.log(this.isLoaded);
      }
    });
  }

}
