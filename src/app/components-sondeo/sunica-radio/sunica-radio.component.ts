import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-sunica-radio',
  templateUrl: './sunica-radio.component.html',
  styleUrls: ['./sunica-radio.component.scss'],
})
export class SunicaRadioComponent implements OnInit {

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
  @Input() idSondeo: string;
  @Input() sku: number;

  isValid = 0;
  idStrQuest = "";
  selected=-1;
  RequiredValue:Validators[];
  idOpcion =  "";
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    idOpcion: "",
    selected: -1,
    valid:0,
    obligatorio:0
  };
  respuestaStr:string;
  constructor(private fb : FormBuilder,
              private toastCtrl: ToastController,
              private storage: StorageHelperService) {
                this.unicaRGroup = this.fb.group({
                  "unicaRadio": ['', this.RequiredValue],
                });
  }

  ngOnInit() {
    this.idStrQuest =  this.idSondeo + '||' + this.sku + '||' +this.idPregunta.toString();    
    this.storage.getObject(this.idStrQuest).then((question: any) => {
      this.respuestaStr = question.respuesta;
      this.selected = question.selected;
      this.isValid = this.respuestaStr.length>0 ? 1 : 0;
      this.storage.setObject(this.idStrQuest,this.respuestas);
     });
   
   
  }


  submit(){   
    if(this.unicaRGroup.status=="VALID"){
      
      this.respuestas.idPregunta = this.idStrQuest;
      
      this.respuestas.respuesta = this.respuestaStr;
      this.respuestas.tipo = this.tipo;
      this.respuestas.selected = this.selected;
      this.isValid = this.respuestaStr == undefined ? 0 :1;
      this.respuestas.idOpcion = this.idOpcion;
      this.respuestas.obligatorio  = this.obligatorio;
      this.storage.setObject(this.idStrQuest,this.respuestas);
    }else{
      this.isValid =0;
    }
  }
  onChange(i,value,id){
    this.respuestaStr=value;
    this.idOpcion = id; 
    this.selected=i;  
    this.submit();    
  }
}
