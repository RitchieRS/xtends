import { Component, Input, OnInit} from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { LocalFile } from 'src/app/xmodels/file';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';
import { finalize } from 'rxjs/operators';
import { InfoService } from 'src/app/xservices/user/info.service';
const IMAGE_DIR = 'stored-images';


@Component({
  selector: 'app-foto-self',
  templateUrl: './foto-self.component.html',
  styleUrls: ['./foto-self.component.scss'],
})
export class FotoSelfComponent implements OnInit {
  imgDom = false;
  imgLgt=0;
  idStrQuest:string;
  images:LocalFile[];
  respuestas = {
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    paths: [],
    saveImages:[]
  };

  @Input() checkPhotoComplete : (isValid:number) => void;

  constructor(
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: StorageHelperService,
    private srvInf: InfoService

    ) { }

  async ngOnInit() {
    this.idStrQuest="app-foto-self" + localStorage.getItem('idUser') ;
    this.respuestas.tipo="app-foto-self"  + localStorage.getItem('idUser') ;
    console.log(this.imgLgt);
    try{ await this.storage.getObject(this.idStrQuest).then((question: any) => {
         console.log(question.paths);
          this.respuestas.paths= [...question.paths];
          this.imgLgt = this.respuestas.paths.length >= 1 ? 1 :  0;
          this.checkPhotoComplete(this.imgLgt);
          console.log("Foto id check")
          console.log(this.imgLgt ); 
          this.loadFiles();
        });
      }catch(e){
        this.imgLgt = 0;
        this.checkPhotoComplete(this.imgLgt);
        console.log(e);
      }

  }

  async loadFiles() {
    this.images =[];
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
    this.respuestas.saveImages = [];
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;

      const readFile = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Data,
      });
      if(this.respuestas.paths.includes(filePath)){
          this.images.push({
            name: f,
            path: filePath,
            data: `data:image/jpeg;base64,${readFile.data}`,
          });
         // this.respuestas.saveImages = this.images;
         // this.storage.setObject(this.idStrQuest,this.respuestas);

      }
    }
  }

  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      color: 'navybluextend',
      position: 'top',
      mode : 'ios',
    });
    toast.present();
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
    async selectDocument() {
      const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
          source: CameraSource.Prompt // Camera, Photos or Prompt!
      });

      if (image) {
          this.saveImage(image)

      }
    }
// Create a new file from a capture image
async saveImage(photo: Photo) {
  const base64Data = await this.readAsBase64(photo);
  console.log(this.imgLgt);
  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data,
      directory: Directory.Data,
      recursive: true
  });

  // Reload the file list
  // Improve by only loading for the new image and unshifting array!
  this.loadFiles();
  this.imgLgt=1;
  this.respuestas.paths.push(`${IMAGE_DIR}/${fileName}`);
  this.respuestas.saveImages= [{img64: base64Data}];
  this.checkPhotoComplete(this.imgLgt);
  this.storage.setObject(this.idStrQuest,this.respuestas);
  this.sendInf();


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


sendInf() {
  const token = localStorage.getItem('token');
   console.log(this.respuestas);
   if(this.respuestas.paths.length>0){
      this.srvInf.sendSelfFoto(this.respuestas,token).subscribe((res) =>{
            this.images.forEach( (file) =>{
              this.deleteImage(file)
            })
            //this.storage.removeItem(this.idStrQuest);
      })
   }
  }




// Upload the formData to our API

}
