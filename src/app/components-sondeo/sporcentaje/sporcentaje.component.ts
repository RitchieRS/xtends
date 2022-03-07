import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-sporcentaje',
  templateUrl: './sporcentaje.component.html',
  styleUrls: ['./sporcentaje.component.scss'],
})
export class SporcentajeComponent implements OnInit {

  


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
  @Input() sku: number;

  isValid = 0;
  idStrQuest = "";
  RequiredValue:Validators[];
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
              private storage: StorageHelperService) {
                this.numericaGroup = this.fb.group({
                  "porcentaje": ['', this.RequiredValue],
                });
               }

  ngOnInit() {
    this.idStrQuest =  this.idSondeo + '||' + this.sku + '||' +this.idPregunta.toString();
    console.log(this.idStrQuest)
    
    this.storage.getObject(this.idStrQuest).then((question: any) => {
        this.respuestaStr = question.respuesta.toString();;
        this.isValid = this.respuestaStr.length>0 ? 1 : 0;
        this.respuestas = {
          idPregunta:this.idStrQuest,
          tipo:      this.tipo,
          respuesta: this.respuestaStr,
          valid: this.isValid,
          obligatorio:this.obligatorio
        }
        this.storage.setObject(this.idStrQuest,this.respuestas);
    });
   
   
  }

  submit(){
    console.log("algo");
    try{
        console.log(this.numericaGroup.get('porcentaje').value);
        if(this.numericaGroup.status=="VALID"){
          this.respuestas.respuesta = this.numericaGroup.get('porcentaje').value;
          this.respuestas.valid = (this.numericaGroup.get('porcentaje').value == null ) ? 0 : 1 ;
          this.isValid = this.respuestas.valid;
          this.respuestas.obligatorio = this.obligatorio;
          
          this.storage.setObject(this.idStrQuest,this.respuestas);
        }else{

        }
    }
    catch(e){
      console.log(e);
    }

  }



}
