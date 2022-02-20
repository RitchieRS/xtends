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
  @Input() idSondeo: string;
  isValid = 0;
  idStrQuest = "";
  RequiredValue:Validators[]=[Validators.required];
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    obligatorio:0
  }
  respuestaStr:string;
  constructor(private fb : FormBuilder,
              private toastCtrl: ToastController,
              private storage: StorageHelperService) { }

  ngOnInit() {
    this.idStrQuest =  this.idSondeo + '||' + this.idPregunta.toString();
    console.log(this.idStrQuest);
   
    this.abiertaGoup = this.fb.group({
      "date": ['', this.RequiredValue],
    });
    this.storage.getObject(this.idStrQuest).then((question: any) => {
     this.respuestaStr = question.respuesta;
     console.log(this.respuestaStr);
     this.isValid = this.respuestaStr.length>0 ? 1 : 0;
     this.respuestas = {
                      idPregunta:this.idStrQuest,
                      tipo:      this.tipo,
                      respuesta: this.respuestaStr,
                      obligatorio: this.obligatorio
                    }
                    this.storage.setObject(this.idStrQuest,this.respuestas);
    });
   
   
  }

  submit(){

    if(this.abiertaGoup.status=="VALID"){
      this.isValid = 1;
      this.respuestas.respuesta = this.abiertaGoup.get('date').value;
      this.respuestas.obligatorio =this.obligatorio;
      this.storage.setObject(this.idStrQuest,this.respuestas);
    }else{
      this.isValid = 0;
    }

  }



}
