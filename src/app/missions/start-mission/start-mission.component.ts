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
  //[r, c] = [5, 5]; 
  //checkedIdx =  Array(2).fill(0).map(row => new Array(100).fill(0))
  checkedIdx = Array(100).fill(Array(1).fill(0));



  


  preguntas = [];
  /* [
    {
        "idPregunta": 26,
        "pregunta": "Registro",
        "tipo": "informativo",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 0,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 27,
        "pregunta": "Nombre Completo",
        "tipo": "abierta",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 1,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 28,
        "pregunta": "Ingreso a la tienda",
        "tipo": "informativo",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 2,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 29,
        "pregunta": "Presentación de Papeles",
        "tipo": "unicaRadio",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 3,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 9,
                "opcion": "SI",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 0
            },
            {
                "idOpcion": 10,
                "opcion": "NO",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            },
            {
                "idOpcion": 11,
                "opcion": "N/A",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 2
            }
        ]
    },
    {
        "idPregunta": 30,
        "pregunta": "Presentación con Jefe de Piso",
        "tipo": "unicaRadio",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 4,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 12,
                "opcion": "SI",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 0
            },
            {
                "idOpcion": 13,
                "opcion": "NO",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            },
            {
                "idOpcion": 14,
                "opcion": "N/A",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 2
            }
        ]
    },
    {
        "idPregunta": 31,
        "pregunta": "Revisión física de anaquel",
        "tipo": "tomaFoto",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 5,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 32,
        "pregunta": "Revisión física de exhibidores",
        "tipo": "tomaFoto",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 6,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 33,
        "pregunta": "Anaquel",
        "tipo": "informativa",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 7,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 34,
        "pregunta": "Limpieza de producto en anaquel",
        "tipo": "unicaRadio",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 8,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 15,
                "opcion": "SI",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 0
            },
            {
                "idOpcion": 16,
                "opcion": "NO",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            },
            {
                "idOpcion": 17,
                "opcion": "N/A",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 2
            }
        ]
    },
    {
        "idPregunta": 35,
        "pregunta": "Limpieza de anaquel y acomodo",
        "tipo": "unicaRadio",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 9,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 18,
                "opcion": "SI",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 0
            },
            {
                "idOpcion": 19,
                "opcion": "NO",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            },
            {
                "idOpcion": 20,
                "opcion": "N/A",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 2
            }
        ]
    },
    {
        "idPregunta": 36,
        "pregunta": "Toma foto del anaquel",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 10,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 37,
        "pregunta": "¿Cuántos frentes encontraste?",
        "tipo": "numerico",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 11,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 38,
        "pregunta": "Toma fotos de los frentes",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 12,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 39,
        "pregunta": "Revisión física de exhibidores",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 13,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 41,
        "pregunta": "Material POP",
        "tipo": "informativa",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 14,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 40,
        "pregunta": "Al ingresar a la sucursal encontraste alguno de los siguienetes materiales POP implementados?",
        "tipo": "multiple",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 15,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 21,
                "opcion": "DOOR SIGN",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 0
            },
            {
                "idOpcion": 22,
                "opcion": "SENSORMATIC",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            }
        ]
    },
    {
        "idPregunta": 42,
        "pregunta": "Fotografía materiales entrada",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 16,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 43,
        "pregunta": "El window rack contaba con los siguientes materiales",
        "tipo": "multiple",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 17,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 23,
                "opcion": "HEADER",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 0
            },
            {
                "idOpcion": 24,
                "opcion": "CENEFA",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            },
            {
                "idOpcion": 25,
                "opcion": "DANGLER",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 2
            }
        ]
    },
    {
        "idPregunta": 44,
        "pregunta": "Fotografia Window Rack",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 18,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 45,
        "pregunta": "La isla contaba con alguno de los siguientes materiales",
        "tipo": "multiple",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 19,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 26,
                "opcion": "STOPPERS",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 0
            },
            {
                "idOpcion": 27,
                "opcion": "CENEFAS",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            },
            {
                "idOpcion": 28,
                "opcion": "GLORIFICADOR",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 2
            }
        ]
    },
    {
        "idPregunta": 46,
        "pregunta": "Fotografía Isla",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 20,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 47,
        "pregunta": "La sucursal contaba con Flyers autozone?",
        "tipo": "unicaRadio",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 21,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 29,
                "opcion": "SI",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 0
            },
            {
                "idOpcion": 30,
                "opcion": "NO",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            }
        ]
    },
    {
        "idPregunta": 48,
        "pregunta": "Colocación de material PDV",
        "tipo": "informativa",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 22,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 49,
        "pregunta": "Ya instalaste los corbatines?",
        "tipo": "unicaRadio",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 23,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 31,
                "opcion": "SI",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 0
            },
            {
                "idOpcion": 32,
                "opcion": "NO",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            }
        ]
    },
    {
        "idPregunta": 50,
        "pregunta": "Cantidad colocadas",
        "tipo": "numerica",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 49,
        "dependeRespuesta": 31,
        "urlImage": "0",
        "orden": 24,
        "minimo": 1,
        "maximo": 25,
        "opciones": []
    },
    {
        "idPregunta": 51,
        "pregunta": "Toma la foto de ls corbatines puestos",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 49,
        "dependeRespuesta": 31,
        "urlImage": "0",
        "orden": 25,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 52,
        "pregunta": "Ya colocaster los Stoppers?",
        "tipo": "unicaRadio",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 26,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 33,
                "opcion": "SI",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 0
            },
            {
                "idOpcion": 34,
                "opcion": "NO",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            }
        ]
    },
    {
        "idPregunta": 53,
        "pregunta": "Cantidad colocadas",
        "tipo": "numerica",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 52,
        "dependeRespuesta": 33,
        "urlImage": "0",
        "orden": 27,
        "minimo": 1,
        "maximo": 25,
        "opciones": []
    },
    {
        "idPregunta": 54,
        "pregunta": "Toma la foto de los stoppers instalados",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 52,
        "dependeRespuesta": 33,
        "urlImage": "0",
        "orden": 28,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 55,
        "pregunta": "Check out ",
        "tipo": "informativa",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 29,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 56,
        "pregunta": "Número de canjes realizados",
        "tipo": "numerica",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 30,
        "minimo": 1,
        "maximo": 50,
        "opciones": []
    },
    {
        "idPregunta": 57,
        "pregunta": "Algún cliente te indicó que rechazaba la compra por el tipo de viscosidad del producto?",
        "tipo": "unicaRadio",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 31,
        "minimo": 0,
        "maximo": 0,
        "opciones": [
            {
                "idOpcion": 35,
                "opcion": "SI",
                "obligatorio": 1,
                "puntos": 1,
                "orden": 0
            },
            {
                "idOpcion": 36,
                "opcion": "NO",
                "obligatorio": 1,
                "puntos": 0,
                "orden": 1
            }
        ]
    },
    {
        "idPregunta": 58,
        "pregunta": "De que tipo buscaba?",
        "tipo": "abierta",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 57,
        "dependeRespuesta": 35,
        "urlImage": "0",
        "orden": 32,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 59,
        "pregunta": "Comentarios de los clientes o personal en tienda",
        "tipo": "abierta",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 57,
        "dependeRespuesta": 35,
        "urlImage": "0",
        "orden": 33,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    },
    {
        "idPregunta": 60,
        "pregunta": "Foto de salida",
        "tipo": "fotografia",
        "puntaje": 0,
        "obligatorio": 0,
        "dependePregunta": 0,
        "dependeRespuesta": 0,
        "urlImage": "0",
        "orden": 34,
        "minimo": 0,
        "maximo": 0,
        "opciones": []
    }
]*/
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
  dataSondeo={};

  constructor(private checks:CheckinserviceService,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private router: Router,
    public dialog: MatDialog,
    public servMission : MissionService,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { 
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.token = localStorage.getItem('token');
    this.lat = 19.4216458;
    this.lgn = 99.0691779;
    this.dataSondeo={
      "idPV" :  this.idPV
    }
    console.log("inicia sondeo");
    this.servMission.getSondeoXmission(this.token,this.dataSondeo).subscribe((res) =>{
        this.dataSondeResponse  = res;
        this.preguntas =this.dataSondeResponse.resp.preguntas;
      //this.router.navigate(['start-mission/'+this.idPV])
   })
   console.log(this.checkedIdx)
   console.log(this.checkedIdx[1][0])

    

  }

  async ngOnInit() {
    
    // this.loadFiles();    
  }



  openDialog(){
    this.dialog.open(DialogCaptureproductinfoComponent);
  }
  async loadFiles() {
    this.images = [];
 
    const loading = await this.loadingCtrl.create({
      message: 'Loading data...',
    });
    await loading.present();
 
    Filesystem.readdir({
      path: IMAGE_DIR,
      directory: Directory.Data,
    }).then(result => {
      this.loadFileData(result.files);
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
    });
  }
 
  // Get the actual base64 data of an image
  // base on the name of the file
  async loadFileData(fileNames: string[]) {
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;
 
      const readFile = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Data,
      });
 
      this.images.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`,
      });
    }
  }
 
  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }
 

 
  async startUpload(file: LocalFile) {
    // TODO
  }
 
  async deleteImage(file: LocalFile) {
    await Filesystem.deleteFile({
        directory: Directory.Data,
        path: file.path
    });
  //  this.presentToast('File removed.');
  }

  async selectCamera() {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera // Camera, Photos or Prompt!
    });
 
    if (image) {
        this.saveImage(image)
    }
}
    async selectGalery() {
      const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
          source: CameraSource.Photos // Camera, Photos or Prompt!
      });

      if (image) {
          this.saveImage(image)
      }
    }
// Create a new file from a capture image
async saveImage(photo: Photo) {
  const base64Data = await this.readAsBase64(photo);

  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data,
      directory: Directory.Data
  });

  // Reload the file list
  // Improve by only loading for the new image and unshifting array!
  this.loadFiles();
}

// https://ionicframework.com/docs/angular/your-first-app/3-saving-photos
private async readAsBase64(photo: Photo) {
  if (this.plt.is('hybrid')) {
      const file = await Filesystem.readFile({
          path: photo.path
      });

      return file.data;
  }
  else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
  }
}

// Helper function
convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});


async sendSondeo(){
  this.presentToast('Sondeo Enviado');
  this.router.navigate(['home']);
  
this.images.forEach( (file)=>{
    this.deleteImage(file)
})

}



checkboxClick(e){
  console.log(e) 
 }

}
