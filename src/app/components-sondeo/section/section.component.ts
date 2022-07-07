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
        if(isValid==1 && idRespuesta !=0 ){
          dependencias = this.preguntasAux.filter( pregunta => {  return Number(pregunta.dependePregunta) == idPregunta } );
          console.log("Dependencias 1")
          console.log(dependencias);
          console.log(this.preguntas);
          dependencias.forEach((item) => {
            //((Number(pregunta.dependePregunta) == item.idPregunta) || 
              let check =  dependencias = this.preguntas.filter( pregunta => {  return ((Number(pregunta.dependeRespuesta) ===  idRespuesta )) } );
              console.log("Check length : "+check.length);
              console.log("Check item : "+item)
              if(check.length == 0 ){
                
                this.preguntas.push(item);
                let order = this.preguntas.sort((a, b) => (a.orden< b.orden) ? -1 : 1);

               /*const filteredArr = order.filter(el => {
                  const duplicate = auxArrSeen.has(el.idPregunta);
                  auxArrSeen.add(el.idPregunta);
                  return !duplicate;
                });

                order = filteredArr;*/

                this.preguntas = order;
              }else{
                //(Number(pregunta.dependePregunta) == idPregunta) && 
                dependencias = this.preguntas.filter( pregunta => {   return !((Number(pregunta.dependePregunta) === idPregunta) && (Number(pregunta.dependeRespuesta) ===  idRespuesta )) } );
                console.log("Dependencias 2")
                console.log(dependencias)
                /*const filteredArr = dependencias.filter(el => {
                  const duplicate = auxArrSeen.has(el.idPregunta);
                  auxArrSeen.add(el.idPregunta);
                  return !duplicate;
                });
                dependencias =  filteredArr;*/
                this.preguntas = dependencias;
              }


             
          })
        }
       
        console.log(dependencias);
  }

}
