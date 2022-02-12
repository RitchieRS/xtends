import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Respuesta } from 'src/app/xmodels/checkin';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.scss'],
})
export class FechaComponent implements OnInit {

  


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
  isValid = 0;
  idStrQuest = "";
  RequiredValue:Validators[];
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  ""
  }
  respuestaStr:string;
  constructor(private fb : FormBuilder,
              private toastCtrl: ToastController,
              private storage: StorageHelperService) { }

  ngOnInit() {
    this.idStrQuest =  this.idPregunta.toString();
    if(this.obligatorio==1){
     this.RequiredValue.push(Validators.required);
    }
    this.abiertaGoup = this.fb.group({
      "date": ['', this.RequiredValue],
    });
    this.storage.getObject(this.idStrQuest).then((question: any) => {
     this.respuestaStr = question.respuesta;
     this.isValid = this.respuestaStr.length>0 ? 1 : 0;
    });
   this.respuestas = {
      idPregunta:this.idStrQuest,
      tipo:      this.tipo,
      respuesta: this.respuestaStr
    }
   
  }

  submit(){
    console.log("algo");
    
    if(this.abiertaGoup.status=="VALID"){
      this.isValid = 1;
      this.respuestas.respuesta = this.abiertaGoup.get('date').value;
      this.storage.setObject(this.idStrQuest,this.respuestas);
    }else{

    }

  }



}
