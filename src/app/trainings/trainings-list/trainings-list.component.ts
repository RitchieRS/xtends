import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabilidadesService } from '../../xservices/habilidades/habilidades.service';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {

  idcurso: number;
  token: string;
  dataHabilidades: any;

  constructor(
    private route: ActivatedRoute,
    private srvHabilidades: HabilidadesService,
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');


    this.srvHabilidades.getHabilidades(token).subscribe(
      (res) => {

      }
    );
  }

}
