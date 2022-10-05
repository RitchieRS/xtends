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
    
    const independientes = this.preguntas.filter( pregunta => {  return ((Number(pregunta.dependePregunta) == 0 ) &&  (Number(pregunta.dependeRespuesta == 0 ) ) ) } );
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
    const auxArrSeen = new Set();
    //this.preguntas = this.preguntasAux;
    this.preguntas = this.preguntas.filter(el => {
      const duplicate = auxArrSeen.has(el.idPregunta);
      auxArrSeen.add(el.idPregunta);
      return !duplicate;
    });
    let idSPregunta = [];
    //&& idRespuesta !=0
        if(isValid==1 && idRespuesta !=0 ){
          dependencias = this.preguntasAux.filter( 
            pregunta => {  
              console.log("dependeRespuesta:" + pregunta.dependeRespuesta + " - "+ (pregunta.dependeRespuesta  == 0) + " dependePregunta" + pregunta.dependePregunta + "-" +Number(idPregunta) )
              return (Number(pregunta.dependePregunta) == Number(idPregunta)  || Number(pregunta.dependeRespuesta) == idRespuesta )} );

          dependenciasAx = this.preguntasAux.filter( 
                pregunta => {  
                  return (Number(pregunta.dependePregunta) == Number(idPregunta) && Number(pregunta.dependeRespuesta) == Number(idRespuesta)) } );
          
          console.log("Dependencias Size 1 : " + dependencias.length);
          console.log("Dependencias Size 2 : " + dependenciasAx.length);
   
          dependencias.forEach((item) => {
            console.log("Dependende RES: " + item.dependeRespuesta);
            console.log("Dependende PRE: " + item.dependePregunta);
            console.log("Dependende RES: " + idRespuesta);
            console.log("Dependende PRE: " + idPregunta);
          
            let check = this.preguntas.filter(obj => {return obj.idPregunta == item.idPregunta });
              console.log("Filtro Dependencias ")

              if(check.length == 0 ){
                this.preguntas.push(item);
                let order = this.preguntas.sort((a, b) => (a.orden< b.orden) ? -1 : 1);
                this.preguntas = order;
              }else{
                console.log("Entra al if sin dudas chavon ")
                 dependencias = this.preguntas.filter( pregunta => {   return !(((Number(pregunta.idPregunta) == Number(item.idPregunta)) )) } );

                 this.preguntas = dependencias.sort((a, b) => (a.orden< b.orden) ? -1 : 1);
              }


             
          })
        }
       
       // console.log(dependencias);
  }

}
