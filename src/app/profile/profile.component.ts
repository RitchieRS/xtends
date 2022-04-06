import { NUMBER_TYPE, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Informacion, ProfileResp, UserProfile } from '../xmodels/user';
import { InfoService } from '../xservices/user/info.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../xservices/auth/login.service';
import { Subject } from 'rxjs';



const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {



  // habilidades = [
  //   {
  //     color:'greenxtend',
  //     colortwo:'success',
  //     tipo:'Fotografía Anaquel',
  //     avance:'0.25',
  //     icon:'anaqueleo.svg',
  //   },
  //   {
  //     color:'greenxtend',
  //     colortwo:'success',
  //     tipo:'Fotografía Anaquel',
  //     avance:'0.25',
  //     icon:'anaqueleo.svg',
  //   },
  // ];
  pasos = [
    {
      color:'#90c04e',
      colortwo:'success',
      icon:'checkmark-circle',
      title:'1. Ingreso a tienda por persona',
      video:'Video 30 seg.',
      score:'8/9'
    },
    {
      color:'#90c04e',
      colortwo:'success',
      icon:'checkmark-circle',
      title:'2. Documentación y credencial',
      video:'Video 30 seg.',
      score:'7/9'
    },
    {
      color:'#90c04e',
      colortwo:'success',
      icon:'checkmark-circle',
      title:'3. Ubicación de productos',
      video:'Video 30 seg.',
      score:'6/9'
    },
    {
      color:'#90c04e',
      colortwo:'danger',
      icon:'close-circle',
      title:'4. Limpieza y acomodo de anaquel',
      video:'Video 30 seg.',
      score:'5/9'
    },
    {
      color:'#90c04e',
      colortwo:'navyblue',
      icon:'play-circle',
      title:'5. Precios y Descuentos',
      video:'Video 30 seg.',
      score:'4/9'
    },
  ];

  habilidades: any;

  selectedTrabajoInteres: string;
  selectedZonaInteres: string;
  panelOpenState: boolean = false;
  userResponse : UserProfile;
  profileData : ProfileResp;
  nombre : string;
  datosCompletosStr:string;
  datosCompletosN:number;
  referidosPorcentajeStr:string;
  referidosPorcentajeN:number;
  fotoId:number;
  amat:string;
  apat: string;
  dirAlcadia: string;
  dirCP: string;
  dirCalle:string;
  dirCd: string;
  dirColonia:string;
  dirNumExt: string;
  dirNumInt: string;
  email: string;
  fechaNacimiento: Date;
  movil: string;
  userForm: FormGroup;
  credForm: FormGroup;
  images: LocalFile[] = [];
  nivelXtender:string;
  nivelTermo=([...Array(16).fill(0)]);
  imgDomicilio:LocalFile;
  searchCitiesFiler:string;
  fotoSelfOk=0;
  signOk=0;
  puesto:   string;
  imss:     string;
  rfc:      string;
  urlFirma: string;
  nivelXtenderStr : string;
  nivelXtenderNum = 0;
  calificacion:number;
  visiblefield = 0;
  printCredential= true;

  imgDom=false;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private srvProfile : InfoService,
              public fb  : FormBuilder,
              private plt: Platform,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              public dialog: MatDialog,
              private srvLog: LoginService,
              private infSrv: InfoService) { }

  ngOnInit() {
    console.log(this.nivelTermo);
    this.userForm = this.fb.group({
          nombre : ['', [Validators.minLength(4)]],
          apat: ['', [Validators.minLength(4)]],
          amat: ['', [Validators.minLength(4)]],
          dirAlcadia : ['', [Validators.minLength(4)]],
          dirCP: ['',[Validators.pattern("^[0-9]*$"),
          Validators.minLength(5)]],
          dirCalle: ['', [Validators.minLength(4)]],
          dirCd: ['', [Validators.minLength(4)]],
          dirColonia: ['', [Validators.minLength(4)]],
          dirNumExt: ['', [Validators.minLength(4)]],
          dirNumInt: ['', [Validators.minLength(4)]],
          email: ['', [
                        Validators.email]],
          fechaNacimiento: ['', []],
          movil: ['',[ Validators.pattern("^[0-9]*$")]],
          terminos: [false,[ Validators.required,Validators.required]]
    });
    this.credForm = this.fb.group({
      imss : ['', [Validators.minLength(4),Validators.required]],
      rfc: ['', [Validators.minLength(4),Validators.required]],
      terminos: [false,[ Validators.required,Validators.required]]
});


    this.initData();


  }

  training(){
    this.router.navigate(['training']);
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


async startUpload(file: LocalFile) {
  this.imgDom =true;
  this.imgDomicilio = file;
  console.log(file.name)
  const response = await fetch(file.data);
  const blob = await response.blob();
  const formData = new FormData();
  formData.append('imgDomicilio', blob, file.name);
  console.log(formData);
  this.deleteImage(file)
  //this.uploadData(formData);
}


async updateData(){

    const token = localStorage.getItem('token');
    console.log("soy un input");
    if(this.userForm.value.terminos==false){
      this.presentToast('Acepte los términos y condiciones');
      return;
    }
    this.presentToast('Actualizando Información.');


    ;(await this.srvProfile.updateProfileInformation(token, this.userForm.value, this.imgDomicilio)).subscribe((res) =>{
      if(res){
        this.panelOpenState = false;
        this.printCredential  = true;
        this.initData();
        this.presentToast('Listo.');

      }
    })


  }

  async updateCredentials(){
    console.log("soy una credencial")
    const token = localStorage.getItem('token');
    console.log(this.credForm.value)

    if(this.fotoSelfOk==0){
      this.presentToast('Actualice su fotografía');
      return;
    }

    if(this.signOk==0){
      this.presentToast('Actualice su firma');
      return;
    }
    if(this.credForm.value.terminos==false){
      this.presentToast('Acepte los términos y condiciones');
      return;
    }
    console.log(this.credForm.status);
    if(this.credForm.status=="INVALID"){
      this.presentToast('LLenen todos los datos requeridos');
      return;
    }



    this.presentToast('Actualizando Información.');


    ;(await this.srvProfile.updateInformationCredential(token, this.credForm.value)).subscribe((res) =>{
      if(res){
        console.log(res);
        this.panelOpenState = false;
        this.printCredential = false;
        this.initData();
        this.presentToast('Listo! Imprime tu credencial.');

      }
    })


  }

  initData(){
    const token = localStorage.getItem('token');
    this.srvProfile.getProfileInformation(token).subscribe((res) =>{
      console.log(res);
      if(res){
        this.userResponse = res;
        this.profileData = this.userResponse.resp;
        this.nombre = this.profileData.informacion.nombre;
        this.amat = this.profileData.informacion.amat;
        this.apat = this.profileData.informacion.apat;
        this.dirAlcadia = this.profileData.informacion.dirAlcadia;
        this.dirCP = this.profileData.informacion.dirCP;
        this.dirCalle = this.profileData.informacion.dirCalle;
        this.dirCd = this.profileData.informacion.dirCd;
        this.dirColonia = this.profileData.informacion.dirColonia;
        this.dirNumExt = this.profileData.informacion.dirNumExt;
        this.dirNumInt = this.profileData.informacion.dirNumInt;
        this.email =  this.profileData.informacion.email;
        this.fechaNacimiento = this.profileData.informacion.fechaNacimiento;
        this.movil = this.profileData.informacion.movil;
        this.calificacion = this.profileData.calificacion;


       // this.nivelXtender = this.profileData.nivelXtender;

        /*this.datosCompletosStr = this.profileData.nivelesDatos.datosComplemento;
        this.datosCompletosN = Number(this.datosCompletosStr.substring(0,this.datosCompletosStr.length-1))/100;
        this.referidosPorcentajeStr =  this.profileData.nivelesDatos.referidosInvitados;
        this.referidosPorcentajeN = Number(this.referidosPorcentajeStr.substring(0,this.referidosPorcentajeStr.length-1))/100;
        this.fotoId = this.profileData.nivelesDatos.fotoID;
        */

        this.datosCompletosN = Number(this.profileData.nivelesDatos.datosCompletos)/100;
        this.fotoId = this.profileData.nivelesDatos.fotoID;
        this.referidosPorcentajeN  =  Number(this.profileData.nivelesDatos.referidosInvitados)/100;
        console.log(this.datosCompletosN );
        this.puesto = this.profileData.credenciales.puesto;
        this.imss  = this.profileData.credenciales.imss;
        this.rfc  = this.profileData.credenciales.rfc;
        this.urlFirma= this.profileData.credenciales.urlFirma;
        console.log(this.urlFirma);
        console.log("algo algo");
        this.nivelXtenderStr =  this.profileData.nivelXtender.name;
        localStorage.setItem('levelx',this.nivelXtenderStr);

       this.nivelXtenderNum = Number(this.profileData.nivelXtender.partsNivel.uno) +
                              Number(this.profileData.nivelXtender.partsNivel.dos) +
                              Number(this.profileData.nivelXtender.partsNivel.tres) +
                              Number(this.profileData.nivelXtender.partsNivel.cuatro) ;

                              console.log(this.nivelXtenderNum);

                              if( this.nivelXtenderStr=='Bronce'){
                                this.visiblefield = 1;
                              }
                              else if( this.nivelXtenderStr=='Plata'){
                                this.nivelXtenderNum += 4;
                                this.visiblefield = 2;
                              }
                              else if ( this.nivelXtenderStr=='Oro'){
                                this.nivelXtenderNum += 8;
                                this.visiblefield = 3;
                              }
                              else if ( this.nivelXtenderStr=='Elite'){
                                this.nivelXtenderNum += 12;
                                this.visiblefield = 4;
                              }
                              localStorage.setItem('levelnum',this.nivelXtenderNum.toString());








        console.log(this.nivelXtenderStr);
        for(var i = 0; i < this.nivelTermo.length; i++){
          if(i<this.nivelXtenderNum){
            this.nivelTermo[i]=1;
          }
        }

        this.userForm.setValue({
          nombre: this.nombre,
          apat: this.apat,
          amat: this.amat,
          dirAlcadia: this.dirAlcadia,
          dirCP: this.dirCP,
          dirCalle: this.dirCalle,
          dirCd: this.dirCd,
          dirColonia: this.dirColonia,
          dirNumExt: this.dirNumExt,
          dirNumInt: this.dirNumInt,
          email: this.email,
          fechaNacimiento:this.fechaNacimiento,
          movil: this.movil,
          terminos: false

        });

        //ESB | Habilidades
        this.habilidades = this.profileData.capacitacion.habilidades;
        console.log(this.habilidades);


      }
    })
  }

  isFull(name: string,field:string){
    if(name.length==0){
      return "Coloca aquí tu "+ field;
    }

  }

  checkPhotoCompleteParent = (isValid:number): void => {
   this.fotoSelfOk = isValid;

  }

  checkSignParent = (isOk:number): void => {
    this.signOk = isOk;
   }


closePanel() {
    this.panelOpenState = false;
  }

  closeSession() {

    console.log("cerrar sesion")
    try{
      ///alert("cerrar sesion");
      this.srvLog.logauth();
      this.router.navigate(['auth']);
      }catch(e){
        alert(e);
      }

  }

}
