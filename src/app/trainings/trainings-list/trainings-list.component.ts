import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabilidadesService } from '../../xservices/habilidades/habilidades.service';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {

  idHabilidad: number;
  token: string;
  dataHabilidades: any;

  constructor(
    private route: ActivatedRoute,
    private srvHabilidades: HabilidadesService,
  ) {
    this.idHabilidad = Number(this.route.snapshot.paramMap.get('idHabilidad'));
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const dataHabilidades = { "idHabilidades": this.idHabilidad };

    this.srvHabilidades.postHabilidades(dataHabilidades, token).subscribe(
      (res) => {

      }
    );
  }

}
