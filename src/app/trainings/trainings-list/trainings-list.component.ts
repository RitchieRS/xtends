import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabilidadesService } from '../../xservices/habilidades/habilidades.service';



@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {
  // cursos: RespCurso[];
  // idcurso: number;
  // token: string;
  // dataHabilidades: string;
  // infCurso: string;
  // tipoCurso: string;
  // nombreCurso: string;
  // mecanicaCurso: string;
  // temaCurso: string;
  cursodts: any;
  idCurso:       number;
  tipoCurso:     string;
  nombreCurso:   string;
  temaCurso:     string;
  mecanicaCurso: string;
  urlMaterial1:  string;
  urlMaterial2:  string;
  urlMaterial3:  string;
  urlMaterial4:  string;
  urlMaterial5:  string;

  constructor(
    private route: ActivatedRoute,
    private srvCursos: HabilidadesService,
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');


    this.srvCursos.getHabilidades(token).subscribe(
      (res) => {
         this.cursodts = res.resp.cursos[0];
         console.log(this.cursodts);
         this.tipoCurso = this.cursodts.tipoCurso;
         this.nombreCurso = this.cursodts.nombreCurso;
         this.temaCurso = this.cursodts.temaCurso;
         this.mecanicaCurso = this.cursodts.mecanicaCurso;
         this.urlMaterial1 = this.cursodts.urlMaterial1;
         this.urlMaterial2 = this.cursodts.urlMaterial2;
         this.urlMaterial3 = this.cursodts.urlMaterial3;
         this.urlMaterial4 = this.cursodts.urlMaterial4;
         this.urlMaterial5 = this.cursodts.urlMaterial5;
      }
    );
    
  }

}
