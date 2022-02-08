import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { CheckinserviceService } from 'src/app/xservices/checkin/checkinservice.service';
import { LocationService } from 'src/app/xservices/gservice/location.service';
import { MissionService } from 'src/app/xservices/mission/mission.service';
import { DialogCaptureproductinfoComponent } from '../modal-captureproductinfo/dialog-captureproductinfo/dialog-captureproductinfo.component';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Sondeo } from 'src/app/xmodels/sondeo';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

const IMAGE_DIR = 'stored-images';
 
interface LocalFile {
  name: string;
  path: string;
  data: string;
}



@Component({
  selector: 'app-start-mission',
  templateUrl: './start-mission.component.html',
  styleUrls: ['./start-mission.component.scss'],
})
export class StartMissionComponent  {
  images: LocalFile[] = [];
  dataSondeResponse : Sondeo

  abiertaParent:string;
 

  preguntas = [];
 
  productos = [
    {
     nombre:'Producto uno',
     pres:'320 mil',
     presencia:'checkmark-circle',
     color: 'greenxtend'
    },
    {
      nombre:'Producto',
      pres:'500 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto dos',
      pres:'600 mil',
      presencia:'close-circle',
      color: 'navybluextend'
     },
     {
      nombre:'Producto tres',
      pres:'700 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto cuatro',
      pres:'800 mil',
      presencia:'checkmark-circle',
      color: 'greenxtend'
     },
     {
      nombre:'Producto cuatro',
      pres:'1000 mil',
      presencia:'close-circle',
      color: 'navybluextend'
     },
  ]

  idPV =0;
  token = "";
  lat:number;
  lgn:number;
  loading:any
  dataSondeo={};
  idRespuestaSondeo={
   idrespuestas:[]
  }
  respuestasSondeo={
    idPV : "",
    respuestas:[]
  }
  valueid:any
  
  constructor(private checks:CheckinserviceService,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private router: Router,
    public dialog: MatDialog,
    public servMission : MissionService,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: StorageHelperService) { 
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.token = localStorage.getItem('token');
    this.lat = 19.4216458;
    this.lgn = 99.0691779;
    this.dataSondeo={
      idPV :  this.idPV,
      respuestas:[]
    }
    
    this.servMission.getSondeoXmission(this.token,this.dataSondeo).subscribe((res) =>{
        this.dataSondeResponse  = res;
        this.idRespuestaSondeo.idrespuestas=[];
        this.preguntas = this.dataSondeResponse.resp.preguntas;
        Object.entries(this.dataSondeResponse.resp.preguntas).forEach(
            ([key, value]) =>{ 
                
                this.valueid = value['idPregunta'];
                this.idRespuestaSondeo.idrespuestas.push(this.valueid);
            }
        );
      //this.router.navigate(['start-mission/'+this.idPV])
   })  
  }
  
  async ngOnInit() {
    
    
        
  }

  async loadFiles(paths:any, callback: (param:any) => any) {
    let imgResult = [];
    const loading = await this.loadingCtrl.create({
      message: 'Recopilando...',
    });
    await loading.present();
 
    Filesystem.readdir({
      path: IMAGE_DIR,
      directory: Directory.Data,
    }).then(async result => {
        imgResult = await Promise.resolve( this.loadFileData(result.files,paths))
    },
      async (err) => {
        // Folder does not yet exists!
        await Filesystem.mkdir({
          path: IMAGE_DIR,
          directory: Directory.Data,
        });
      }
    ).then(_ => {
      loading.dismiss();
       callback(imgResult);
    });
  }
 
  // Get the actual base64 data of an image
  // base on the name of the file
  async loadFileData(fileNames: string[],paths:any) {
    let imgResult = [];
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;

      const readFile = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Data,
      });
       if(paths.includes(filePath)){
            imgResult.push({
                name: f,
                path: filePath,
                data: `data:image/jpeg;base64,${readFile.data}`,
            });
            console.log(imgResult);
            return imgResult
        }
    }
  }



  openDialog(){
    this.dialog.open(DialogCaptureproductinfoComponent);
  }
  

async sendSondeo(){
   this.respuestasSondeo.respuestas=[];
   this.respuestasSondeo.idPV = this.idPV.toString();
   for(let i of this.idRespuestaSondeo.idrespuestas){ 
        await Promise.resolve(this.storage.getObject(i).then((question: any) => {
              if(question!=null){
                this.respuestasSondeo.respuestas.push(question);
              }
        }));
    }
    for(let i of this.respuestasSondeo.respuestas){ 
                    if(i['tipo'] == 'fotografia'){
                        await Promise.resolve( this.loadFiles(i['paths'],data => {
                            i['saveImages'] = data;
                        }));
                    }         

    }
  this.servMission.sendSondeo(this.respuestasSondeo,this.token,).subscribe((res) =>{
        console.log(res);
       
   })  
     
    

    

    

}


}
