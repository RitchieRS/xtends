import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Respuesta } from 'src/app/xmodels/checkin';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-abierta',
  templateUrl: './abierta.component.html',
  styleUrls: ['./abierta.component.scss'],
})
export class AbiertaComponent implements OnInit {

  


  public abiertaGoup: FormGroup;

  @Input() dependePregunta: number;
  @Input() dependeRespuesta: number;
  @Input() idPregunta: number;
  @Input() maximo: number;
  @Input() minimo: number;
  @Input() obligatorio: number;
  @Input() opciones: string[];
  @Input() orden: number;
  @Input() pregunta: string;
  @Input() puntaje: number;
  @Input() tipo: string;
  @Input() urlImage: string;
  @Input() idSondeo: string;
  @Input() checkCompleteChild: (idPregunta: number, isValid:number ) => void;
  isValid = 0;
  idStrQuest = "";
  RequiredValue:Validators[]=[];
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    valid:0,
    obligatorio:0
  }
  respuestaStr:string;
  constructor(private fb : FormBuilder,
              private toastCtrl: ToastController,
              private storage: StorageHelperService) { }

  ngOnInit() {
    this.idStrQuest =  this.idSondeo + '||' + this.idPregunta.toString();
    console.log(this.idStrQuest);
    if(this.obligatorio==1){
     this.RequiredValue.push(Validators.required);
    }
    this.abiertaGoup = this.fb.group({
      "abierta": ['', this.RequiredValue],
    });
    this.storage.getObject(this.idStrQuest).then((question: any) => {
      console.log(question);
     this.respuestaStr = question.respuesta;
     this.isValid = this.respuestaStr.trim().length>0 ? 1 : 0;
     this.checkCompleteChild(this.idPregunta,this.isValid);
     this.respuestas = {
                        idPregunta:this.idStrQuest,
                        tipo:      this.tipo,
                        respuesta: this.respuestaStr,
                        valid: this.isValid,
                        obligatorio : this.obligatorio
                        }
                        this.storage.setObject(this.idStrQuest,this.respuestas);
    });
   
   
  }

  submit(){
    console.log("abierta");
    if(this.abiertaGoup.status=="VALID"){
      console.log((this.abiertaGoup.get('abierta').value));
      this.respuestas.respuesta = this.abiertaGoup.get('abierta').value;
      this.respuestas.valid = ((this.abiertaGoup.get('abierta').value).trim() == '' ) ? 0 : 1 ;
      this.isValid = this.respuestas.valid;
      this.obligatorio =this.obligatorio;
      this.checkCompleteChild(this.idPregunta,this.isValid);
      this.storage.setObject(this.idStrQuest,this.respuestas);
    }else{
      this.isValid=0;
    }

  }



}
