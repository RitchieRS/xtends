import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-numerica',
  templateUrl: './numerica.component.html',
  styleUrls: ['./numerica.component.scss'],
})
export class NumericaComponent implements OnInit {

  


  public numericaGroup: FormGroup;

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
  RequiredValue:Validators[];
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    valid:0
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
    this.numericaGroup = this.fb.group({
      "numerica": ['', this.RequiredValue],
    });
    this.storage.getObject(this.idStrQuest).then((question: any) => {
     this.respuestaStr = question.respuesta;
     this.isValid = this.respuestaStr.length>0 ? 1 : 0;
    });
   this.respuestas = {
      idPregunta:this.idStrQuest,
      tipo:      this.tipo,
      respuesta: this.respuestaStr,
      valid:this.isValid
    }
   
  }

  submit(){
    console.log(this.numericaGroup.status);
    
    if(this.numericaGroup.status=="VALID"){
      console.log(this.numericaGroup.get('numerica').value);
      this.respuestas.valid = (this.numericaGroup.get('numerica').value == '' || this.numericaGroup.get('numerica').value === null ) ? 0 : 1 ;
      this.isValid = this.respuestas.valid;
      this.storage.setObject(this.idStrQuest,this.respuestas);
    }else{
      this.isValid = 0;
    }

  }



}
