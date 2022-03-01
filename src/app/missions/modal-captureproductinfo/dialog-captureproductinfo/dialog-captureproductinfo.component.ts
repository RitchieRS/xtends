import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-dialog-captureproductinfo',
  templateUrl: './dialog-captureproductinfo.component.html',
  styleUrls: ['./dialog-captureproductinfo.component.scss'],
})
export class DialogCaptureproductinfoComponent implements OnInit {
  preguntas:any;
  valueid =0;
  idPregunta="";
  idRespuestaSondeo={
    idrespuestas:[]
  }
  
  complete=0;
  constructor(@Inject(MAT_DIALOG_DATA) public data : {
                                                      img : string,
                                                      nombre : string,
                                                      presentacion : string,
                                                      preguntas : any[],
                                                      sku : string,
                                                      index:number,
                                                      idPregunta:number,
                                                      idInventario: string
                                                    },
                                                    private storage: StorageHelperService,
                                                    private dialogRef: MatDialogRef<DialogCaptureproductinfoComponent>) { 


                                                      
                                                      this.idPregunta = data.idInventario+ '||' ;
                                                      

  }

  ngOnInit() {

    this.preguntas = this.data.preguntas;

    const list = this.preguntas.filter( pregunta => {  console.log(pregunta.dependePregunta); pregunta.dependePregunta == '0' } );

    //const list = this.preguntas.filter(mission => this.filterType.includes(mission.colorServicio))
            
  }

  checkCompleteParent = (args: any): void => {
    console.log(args);
  }



  async submit(){

    let validRes = 0; 
    let mandatory = 0; 
    this.idRespuestaSondeo.idrespuestas=[];
    Object.entries(this.preguntas).forEach(
      ([key, value]) =>{ 
          
          this.valueid = value['idPregunta'];
          this.idRespuestaSondeo.idrespuestas.push(this.valueid);
          if(value['obligatorio']>0){
            mandatory++;
          }
      }
  );

  validRes = await this.countValid();

  if(mandatory <= validRes){
    this.complete=1;
  }


  this.dialogRef.close(this.complete);  
  }

  async countValid():Promise<number>{
    let countValid=0;
    let count=0;
    for(let i of this.idRespuestaSondeo.idrespuestas){ 
      //   alert(i)
          console.log(this.idPregunta +  i.toString()+'||'+ count);
          await Promise.resolve(this.storage.getObject(this.idPregunta +  i.toString()+'||'+ count ).then((question: any) => {
          //  alert("Finish");
          count++;
  
          if(question.valid==1){
            countValid = this.data.index;
          }
     
          }));
      }
      return countValid;
  }

}

