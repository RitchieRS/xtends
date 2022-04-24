import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from 'src/app/xservices/test/test.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  idCurso: number;
  namee: string;
  colorr: string;
  iconn: string;
  dataExamen: any = {};
  preguntasExamen: any;
  opcionesRespuestas: any;
  opciones: any;
  public examenForm: FormGroup;



  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private srvTest: TestService,
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }



  ngOnInit() {
    this.examenForm = this.formBuilder.group({
      respuestaExamen:['', Validators.required],
    });

    this.idCurso = Number(this.route.snapshot.paramMap.get('idCurso'));
    this.namee = this.route.snapshot.paramMap.get('namee');
    this.iconn = this.route.snapshot.paramMap.get('iconn');
    this.colorr = this.route.snapshot.paramMap.get('colorr');
    console.log(this.idCurso);

    const idCurso = this.idCurso;
    console.log(idCurso);

    const token = localStorage.getItem('token');
    this.srvTest.getTest(token, idCurso).subscribe(
      (res) => {
        this.dataExamen = res.resp[0];
        console.log(this.dataExamen);

        this.preguntasExamen = this.dataExamen.preguntas;
        console.log(this.preguntasExamen);
        }
        );
  }

  submit(){
    console.log(this.examenForm.value);
  }

  back(): void{
    this.location.back();
  };

}
