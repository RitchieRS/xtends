import { Component, Input, OnInit } from '@angular/core';

import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {

isValid = 0;


@Input() capturaSKU: number;
@Input() idProyecto: number;
@Input() idSondeo: number;
@Input() iterativo: number;
@Input() obligatorio: number;
@Input() orden: number;
@Input() preguntas: any[];
@Input() sondeo: string [];

idSondeoStr:string;

preguntasAux:any;

  constructor(private storage: StorageHelperService) { 
    
  }

  ngOnInit() {
    this.preguntas = this.preguntas.sort((a, b) => (a.orden > b.orden  ) ? 1 : -1);
    this.preguntasAux = this.preguntas;
    
    const independientes = this.preguntas.filter( pregunta => {  return Number(pregunta.dependePregunta) == 0 } );
    this.preguntas = independientes;
    //console.log(dependencias);
    //console.log(independientes)
    //console.log(this.preguntasAux);
    this.idSondeoStr = this.idSondeo.toString();
  }

   checkCompleteParent = (idPregunta: number,isValid:number,idRespuesta:number): void => {

    console.log("analizando dependencias"+idPregunta + " Depende de id Respuesta" + idRespuesta +" : valid "+ isValid);
    let dependencias = [];
    let dependenciasAx = [];
    let idSPregunta = [];
        if(isValid==1){
          dependencias = this.preguntasAux.filter( pregunta => {  return Number(pregunta.dependePregunta) == idPregunta } );
          console.log(dependencias);
          console.log(this.preguntas);
          dependencias.forEach((item) => {
              let check =  dependencias = this.preguntas.filter( pregunta => {  return ((Number(pregunta.dependePregunta) == item.idPregunta) || (Number(pregunta.dependeRespuesta) ==  idRespuesta )) } );
              console.log(check.length);
              if(check.length == 0 ){
                console.log(item)
                this.preguntas.push(item);
                let order = this.preguntas.sort((a, b) => (a.orden< b.orden) ? -1 : 1);

                this.preguntas = order;
              }else{
                dependencias = this.preguntas.filter( pregunta => {   return !((Number(pregunta.dependePregunta) == idPregunta) || (Number(pregunta.dependeRespuesta) ==  idRespuesta )) } );
                this.preguntas = dependencias;
              }


             
          })
        }
       
        //console.log(dependencias);
  }

}
