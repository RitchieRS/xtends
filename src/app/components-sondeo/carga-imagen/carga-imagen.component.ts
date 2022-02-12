import { Component, Input, OnInit } from '@angular/core';
import { CameraHelperService } from 'src/app/xservices/camera-helper/camera-helper.service';
import { LocalFile } from 'src/app/xmodels/file';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

const IMAGE_DIR = 'stored-images';

@Component({
  selector: 'app-carga-imagen',
  templateUrl: './carga-imagen.component.html',
  styleUrls: ['./carga-imagen.component.scss'],
})
export class CargaImagenComponent implements OnInit {


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
  respuestas={
    idPregunta:"",
    tipo:      "",
    respuesta:  "",
    paths: [],
    saveImages:[]
  };
  isValid = 0;
  selected=-1;
  idStrQuest = "";
  images:LocalFile[];
  imagesAux:LocalFile[];
  imagesPath:string[];
  constructor(
              private plt: Platform,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private storage: StorageHelperService) { }

              async loadFiles() {
                this.images = [];
                const loading = await this.loadingCtrl.create({
                  message: 'Cargando Imagenes...',
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
                   if(this.respuestas.paths.includes(filePath)){
                      this.images.push({
                        name: f,
                        path: filePath,
                        data: `data:image/jpeg;base64,${readFile.data}`,
                      });
                   }
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
            
              async selectCamera(){
                const image = await Camera.getPhoto({
                    quality: 90,
                    allowEditing: false,
                    resultType: CameraResultType.Uri,
                    source: CameraSource.Photos // Camera, Photos or Prompt!
                });
             
                if (image) {
                   // alert("Guardando imagen")
                    this.saveImage(image);

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
              
              const fileName = new Date().getTime() + '-'+this.idPregunta+ '.jpeg';
          
              try{
                  const savedFile = await Filesystem.writeFile({
                      path: `${IMAGE_DIR}/${fileName}`,
                      data: base64Data,
                      directory: Directory.Data,
                      recursive: true
                  });

              
              this.respuestas.paths.push(`${IMAGE_DIR}/${fileName}`);
              
              this.respuestas.saveImages.push(savedFile);
              
              this.isValid=1;
            
              this.loadInformation();
             
              await this.loadFiles();

               }catch(e){
                 alert(e);
               }
                          
              // Reload the file list
              // Improve by only loading for the new image and unshifting array!
             
              
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

  ngOnInit() {
    
    this.idStrQuest =  this.idPregunta.toString();
    this.storage.getObject(this.idStrQuest).then((question: any) => {
      this.isValid = question.saveImages.length>0 ? 1 : 0;
     
      this.respuestas.paths= [...question.paths];
     // alert(this.respuestas.paths[0]);
      this.loadFiles();
     });
  }

  openCamera(){
   this.selectCamera();
  }

  inf(file){
    this.isValid=0;
    this.deleteImage(file)
    /*this.images.forEach( (file)=>{
 
    })*/
    
  }

  loadInformation(){
    this.respuestas.idPregunta = this.idStrQuest;
    this.respuestas.tipo = this.tipo;
    //alert(this.respuestas.tipo);
    //alert(this.respuestas.paths[0])
    this.storage.setObject(this.idStrQuest,this.respuestas);
  }

}
