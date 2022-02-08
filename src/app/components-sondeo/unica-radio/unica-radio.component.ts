import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-unica-radio',
  templateUrl: './unica-radio.component.html',
  styleUrls: ['./unica-radio.component.scss'],
})
export class UnicaRadioComponent implements OnInit {

  public unicaRGroup: FormGroup;

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
  selected=-1;
  idStrQuest = "";
  RequiredValue:Validators[];
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    selected: -1
  };
  
  respuestaStr:string;
  constructor(private fb : FormBuilder,
              private toastCtrl: ToastController,
              private storage: StorageHelperService) { }
  ngOnInit() {
    this.idStrQuest =  this.idPregunta.toString();
    this.unicaRGroup = this.fb.group({
      "unicaRadio": ['', this.RequiredValue],
    });
    this.storage.getObject(this.idStrQuest).then((question: any) => {
      this.respuestaStr = question.respuesta;
      this.selected = question.selected;
      this.isValid = this.respuestaStr.length>0 ? 1 : 0;
      console.log(this.respuestaStr);
     });
     
  }
  submit(){   
    if(this.unicaRGroup.status=="VALID"){
      this.isValid = 1;
      this.respuestas.idPregunta = this.idStrQuest;
      this.respuestas.respuesta = this.respuestaStr;
      this.respuestas.tipo = this.tipo;
      this.respuestas.selected = this.selected;
      this.storage.setObject(this.idStrQuest,this.respuestas);
    }else{

    }
  }
  onChange(i,value){
    this.respuestaStr=value;
    this.selected=i;      
  }
}
