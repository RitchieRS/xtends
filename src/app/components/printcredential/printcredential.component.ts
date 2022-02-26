import { Component, OnInit, Input } from '@angular/core';
import { InfoService } from 'src/app/xservices/user/info.service';
import { ToastController } from '@ionic/angular';


// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Plugin } from '@capacitor/core';
// import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

// import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { Platform } from '@ionic/angular';
import { Subscriber } from 'rxjs';
import { Credenciales } from 'src/app/xmodels/user';
@Component({
  selector: 'app-printcredential',
  templateUrl: './printcredential.component.html',
  styleUrls: ['./printcredential.component.scss'],
})
export class PrintcredentialComponent implements OnInit{

  // pdfObj = null;

  mycredential: any;



  constructor(
              private credenService: InfoService,
              private toastCtrl: ToastController,
  ) { }


  ngOnInit(): void {
    const token = localStorage.getItem('token');
      this.credenService.getCredentialJpg(token)
      .subscribe(res => {
        console.log('Respdtc', res.resp.credenciales.urlCredencialImg)
        this.mycredential = res.resp.credenciales.urlCredencialImg;
        console.log(this.mycredential);
      });
     
  }

  //is the btn send credential by mail
  credentialTest(){
    const token = localStorage.getItem('token');
      this.credenService.dtcCredential(token)
        .subscribe( console.log );
        this.presentToast('¡Tu credencial se envió a tu mail, imprímela!');
  }


  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 5000,
      color: 'navybluextend',
      position: 'top',
      mode : 'ios',
    });
    toast.present();
  }

  // pdfDownload():void{
  //   const token = localStorage.getItem('token');
  //   this.CredenServiceget.getCredential(credenaa,token).subscribe(
  //     rest => {
  //       console.log(rest);
  //     }
  //   );
  // }

  // pdfDownload(){
  //   const docDef = {
  //     pageSize: 'A4',
  //     pageOrientation: 'portrait',
  //     pageMargins: [20, 10, 40, 60],
  //     content: [
  //       'Pdf Titulo',
  //       'Contenido txt'
  //     ]
  //   }

  //   // crea el pdf
  //   this.pdfObj = pdfMake.createPdf(docDef);

  //   if(this.plt.is('cordova')){

  //     this.pdfObj.getBase64(async (data) => {
  //       try{
  //         let path = `demopdf/demoionicpdf.pdf`;

  //         const result = await Filesystem.writeFile({
  //           path,
  //           data:data,
  //           directory: Directory.Documents,
  //           recursive: true

  //         });

  //         this.fileOpener.open(`${result.uri}`, 'application/pdf');
  //       } catch(e) {

  //         console.log ("tester achu cordova");

  //       }

  //     });
  //   }else{

  //     //descraga el pdf
  //   this.pdfObj.download('test-web.pdf');

  //   }


  // }


}









// import { Component, OnInit, Input } from '@angular/core';
// import { PDFGeneratorOriginal } from '@awesome-cordova-plugins/pdf-generator';
// @Component({
//   selector: 'app-printcredential',
//   templateUrl: './printcredential.component.html',
//   styleUrls: ['./printcredential.component.scss'],
// })
// export class PrintcredentialComponent implements OnInit {

//   content: string;

//   constructor(private pdfGenerator: PDFGeneratorOriginal) { }

//   pdfDownload() {
//     this.content = document.getElementById('Pdfiupck').innerHTML;
//     const options = {
//       documentSize: 'A4',
//       type: 'share',
//       // landscape: 'portrait',
//       fileName: 'Order-Invoice.pdf'
//     };

//     this.pdfGenerator.fromData(this.content, options)
//       .then((base64) => {
//         console.log('OK', base64);
//       }).catch((error) => {
//         console.log('error', error);
//       });

//   }

//   ngOnInit() {}

// }
