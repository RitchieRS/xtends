import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Respuesta } from 'src/app/xmodels/checkin';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {

  


  public emailGroup: FormGroup;

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
  @Input() checkCompleteChild: (idPregunta: number, isValid:number, idRespuesta:number ) => void;
  isValid = 0;
  idStrQuest = "";
  RequiredValue:Validators[]=[Validators.email,Validators.required];
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    valid:0,
    obligatorio:0,
    idOpcion:0
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
    this.emailGroup = this.fb.group({
      "email": ['', this.RequiredValue],
    });
    this.storage.getObject(this.idStrQuest).then((question: any) => {
     this.respuestaStr = question.respuesta;
     this.isValid = this.respuestaStr.length>0 ? 1 : 0;
     
     this.respuestas = {
      idPregunta:this.idStrQuest,
      tipo:      this.tipo,
      respuesta: this.respuestaStr,
      valid: this.isValid,
      obligatorio:this.obligatorio,
      idOpcion : 0
    }
    this.checkCompleteChild(this.idPregunta,this.isValid,this.respuestas.idOpcion);
    this.storage.setObject(this.idStrQuest,this.respuestas);
    });
   
   
  }

  submit(){
    
    if(this.emailGroup.status=="VALID"){
      this.respuestas.valid = (this.emailGroup.get('email').value == null ) ? 0 : 1 ;
      this.respuestas.respuesta = this.emailGroup.get('email').value;
      this.isValid = this.respuestas.valid;
      this.respuestas.obligatorio = this.obligatorio;
      this.checkCompleteChild(this.idPregunta,this.isValid,this.respuestas.idOpcion);
      this.storage.setObject(this.idStrQuest,this.respuestas);
    }else{
      this.isValid = 0;
    }

  }



}
