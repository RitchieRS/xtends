import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import SignaturePad from 'signature_pad';
import { InfoService } from 'src/app/xservices/user/info.service';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.scss'],
})
export class FirmComponent implements OnInit, AfterViewInit {

  @ViewChild('firmaDigital', {static:true})
   signaturePadElement: any;
   signaturePad: any;
   firma: any;

  constructor(private firmaService: InfoService, private toastCtrl: ToastController) { }

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  ngOnInit(): void {}

  cambiarColor(){
    const rojo = Math.round(Math.random() * 255);
    const verde = Math.round(Math.random() * 255);
    const azul = Math.round(Math.random() * 255);
    const color = 'rgb('+rojo+','+verde+','+azul+')';
    this.signaturePad.peColor = color;
  }

  limpiarFirma(){
    this.signaturePad.clear();
  }

  descargar(dataURL:any, nombre:any){
   if(navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome')=== -1){
     window.open(dataURL);
   }
   else{
     const blob = this.URLtoBlob(dataURL);
     const url = window.URL.createObjectURL(blob);
     const a = document.createElement('a');
     a.href = url;
     a.download = nombre;
     this.firma = blob;
     document.body.appendChild(a);
     a.click();
    //  console.log(dataURL);
     window.URL.revokeObjectURL(url);
   }
  }
// <ENVIAR FIRMA
  enviarf(dataURL:any, nombre:any){
   
      const blob = this.URLtoBlob(dataURL);
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = nombre;
      // this.firma = blob;
      // document.body.appendChild(a);
      // a.click();
      const firmaUrl = dataURL;
      const firmaup = {
        firma64 : firmaUrl
      };
      const token = localStorage.getItem('token');
      this.firmaService.sendFirma(firmaup,token).subscribe(
        rest => {
          console.log(rest);
        }
      );
      console.log(firmaUrl);
    
   }



  URLtoBlob(dataURL: any){
   const partes= dataURL.split(';base64,');
   const contentType= partes[0].split(':')[1];
   const raw= window.atob(partes[1]);
   const rawL= raw.length;
   const array= new Uint8Array(rawL);
   for(let i =0;i<rawL;i++){
     array[i] = raw.charCodeAt(i);
   }
   return new Blob([array],{type: contentType});
  }

 guardarPNG(){
   if(this.signaturePad.isEmpty()){
     alert('Debe firmar el documento.');
   }
   else{
     const u = this.signaturePad.toDataURL();
     this.descargar(u, 'firma.png');
     this.firma = u;
   }
 }

// ENVIAR FIRMA
 enviarFirm(){
  if(this.signaturePad.isEmpty()){
    alert('Debe firmar el documento.');
  }
  else{
    const u = this.signaturePad.toDataURL();
    this.enviarf(u, 'firma.png');
    this.firma = u;
    // alert('¡Firma enviada!');
    this.presentToast('¡Firma enviada!');

  }
}

//es el ak del toast
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

}
