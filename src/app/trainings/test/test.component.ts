import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from 'src/app/xservices/test/test.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  idCurso: number;
  puntajeMin: number;
  sumaPuntajeQtns: number;
  totalPuntaje: number;
  prev: number;
  curr: number;
  namee: string;
  colorr: string;
  iconn: string;
  dataExamen: any = {};
  preguntasExamen: any;
  opcionesRespuestas: any;
  opciones: any;
  public examenForm: FormGroup;

  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public resultado: number;
  public totalPuntos: number;
  counter=60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: number = 0;
  qualification: number = 0;
  isQuizCompleted: boolean;
  pushCalificacion: number;
  resultadoCurso: any = [
    {
      idCurso: 0,
      resultado: 0,
      totalPuntos: 0,
    }];

    isLoadedComplite=0;



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
    // console.log(idCurso);
    const token = localStorage.getItem('token');

    this.getAllQuestions();
    this.startCounter();

    this.pushCalificacion = this.qualification;
    console.log(this.pushCalificacion);

  };

  getAllQuestions(){
    this.idCurso = Number(this.route.snapshot.paramMap.get('idCurso'));
    const token = localStorage.getItem('token');
    const idCurso = this.idCurso;
    this.srvTest.getTest(token, idCurso).subscribe(
      (res) => {
        this.dataExamen = res.resp[0];
        console.log(this.dataExamen);
        this.preguntasExamen = this.dataExamen.preguntas;
        console.log(this.preguntasExamen);
        this.questionList = this.preguntasExamen;
        this.sumaPuntajeQtns = this.sumPuntajeQtns();
        this.isLoadedComplite=1;
        }
        );
  }
  sumPuntajeQtns(){
   const totalPuntaje = this.preguntasExamen.map(item => item.puntaje)
   .reduce((prev, curr) => prev + curr, 0);
   console.log(totalPuntaje);
   return totalPuntaje;
  };

  nextQuestions(){
   this.currentQuestion++;
  };

  previousQuestion(){
    this.currentQuestion--;
  };

  answer(currentQno: number, option: any ){
    if(currentQno === this.questionList.length){
      setTimeout(()=>{
        this.isQuizCompleted = true;
        this.stopCounter();
       },900);

    }
    if(option.puntos >= 1){
       this.points+=option.puntos;
       this.correctAnswer++;
       setTimeout(()=>{
        this.currentQuestion++;
        this.restCounter();
        this.getProgress();
       },900);
       this.getQualification();

    }else{
      // this.points-=1;
      this.inCorrectAnswer++;
      setTimeout(()=>{
        this.currentQuestion++;
        this.restCounter();
       this.getProgress();
       },900);
    }
  }

  startCounter(){
    this.interval$= interval(1000)
    .subscribe(val=>{
      
      this.counter--;
        if(this.counter===0){
           this.currentQuestion++;
           this.counter= 60;
          //  this.points-=0;
          if(this.currentQuestion === this.questionList.length){
            this.isQuizCompleted = true;
          };
        };
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },6000000);
  };

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter= 0;
  };

  restCounter(){
    this.stopCounter();
    this.counter= 60;
    this.startCounter();

  };

  resetQuiz(){
    this.restCounter();
    this.getAllQuestions();
    this.points= 0;
    this.counter= 60;
    this.currentQuestion= 0;
    this.correctAnswer= 0;
    this.progress= 0;
    this.qualification = 0;
    this.isQuizCompleted = false;
  };

  getProgress(){
    this.progress = (this.currentQuestion/this.questionList.length);
    return this.progress;
  };

  getQualification(){
    this.qualification = ((this.points/this.sumaPuntajeQtns)*10);
    // console.log(Math.round(this.qualification));
    return this.qualification;
  };

  enviarResultado(){
    this.resultadoCurso[0].idCurso = this.idCurso;
    this.resultadoCurso[0].resultado = this.getQualification();
    this.resultadoCurso[0].totalPuntos = this.points;

    console.log(this.resultadoCurso);

    const token = localStorage.getItem('token');
    this.srvTest.postTest(token, this.resultadoCurso);
    this.isQuizCompleted = true;
  }

  submit(){
    console.log(this.examenForm.value);
  };

  back(): void{
    this.location.back();
  };

}
