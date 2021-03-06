import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
})
export class MultipleComponent implements OnInit {

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
  @Input() checkCompleteChild: (idPregunta: number, isValid:number, idRespuesta:number ) => void;
  isValid = 0;
  selected=-1;
  idStrQuest = "";
  idOpcion =  0;
  RequiredValue:Validators[];
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  [],
    idOpcion: 0,
    selected: -1,
    valid:0
  };
  
  respuestaStr:string;
  constructor(private fb : FormBuilder,
              private toastCtrl: ToastController,
              private storage: StorageHelperService) { }
  ngOnInit() {
    this.idStrQuest =  this.idSondeo + '||' + this.idPregunta.toString();
    this.unicaRGroup = this.fb.group({
      "unicaRadio": ['', this.RequiredValue],
    });
    this.storage.getObject(this.idStrQuest).then((question: any) => {
      this.respuestaStr = question.respuesta;
      this.selected = question.selected;
      this.isValid = this.respuestaStr.length>0 ? 1 : 0;
      this.checkCompleteChild(this.idPregunta,this.isValid,question.idOpcion);
      console.log(this.respuestaStr);
     });
     
  }
  submit(opcion){ 
    
    if(this.unicaRGroup.status=="VALID"){
      
      this.respuestas.idPregunta = this.idStrQuest;
      
      this.respuestas.respuesta.push(this.respuestaStr);
      this.respuestas.tipo = this.tipo;
      this.respuestas.selected = this.selected;
      this.isValid = 1;
      this.respuestas.valid =  1;
      
      this.respuestas.idOpcion = this.idOpcion;
      this.checkCompleteChild(this.idPregunta,this.isValid,this.idOpcion);
      this.storage.setObject(this.idStrQuest,this.respuestas);
    }else{
      this.isValid =0;
    }
  }
  onChange(i,value,id){
    console.log(value);
    this.respuestaStr=value;
    this.idOpcion = id; 
    this.selected=i;  
     
  }
}
