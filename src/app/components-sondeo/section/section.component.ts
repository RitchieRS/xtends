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
    this.idSondeoStr = this.idSondeo.toString();
  }
  checkCompleteParent = (idPregunta: number,isValid:number,idRespuesta:number): void => {
    console.log("section idPregunta"+idPregunta + "Depende Respuesta" + idRespuesta)
    //dependePregunta
    this.preguntas = this.preguntas.filter( pregunta => {   return !((Number(pregunta.dependePregunta) == idPregunta )) } );
    let dependencias = [];
    const auxArrSeen = new Set();
        this.preguntas = this.preguntas.filter(el => {
          const duplicate = auxArrSeen.has(el.idPregunta);
          auxArrSeen.add(el.idPregunta);
          return !duplicate;
        });
        if(isValid==1 && idRespuesta !=0 ){
          dependencias = this.preguntasAux.filter( 
            pregunta => {  return (Number(pregunta.dependePregunta) == Number(idPregunta)  && Number(pregunta.dependeRespuesta) == idRespuesta )} );
          dependencias.forEach((item) => {
            let check = this.preguntas.filter(obj => {return Number(obj.idPregunta) == Number(item.idPregunta) });
              if(check.length == 0 ){
                this.preguntas.push(item);
                this.preguntas = this.preguntas.sort((a, b) => (a.orden< b.orden) ? -1 : 1);
              }else{
                 dependencias = this.preguntas.filter( pregunta => {   return !((   (Number(pregunta.idPregunta) == Number(item.idPregunta))   && Number(pregunta.dependePregunta) == Number(idPregunta) &&  Number(pregunta.dependeRespuesta) == idRespuesta ) ) } );
                 this.preguntas = dependencias.sort((a, b) => (a.orden< b.orden) ? -1 : 1);
              } 
          })
        }
  }

}
