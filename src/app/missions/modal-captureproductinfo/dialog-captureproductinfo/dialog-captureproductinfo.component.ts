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
                                                      index:number
                                                    },
                                                    private storage: StorageHelperService,
                                                    private dialogRef: MatDialogRef<DialogCaptureproductinfoComponent>) { 


                                                      this.preguntas = data.preguntas;
                                                      

  }

  ngOnInit() {}



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
    for(let i of this.idRespuestaSondeo.idrespuestas){ 
      //   alert(i)
          await Promise.resolve(this.storage.getObject(i.toString()).then((question: any) => {
          //  alert("Finish");
  
          if(question.valid==1){
            countValid = this.data.index;
          }
     
          }));
      }
      return countValid;
  }

}

