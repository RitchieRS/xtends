import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.scss'],
})
export class FirmComponent implements OnInit, AfterViewInit {

  @ViewChild('firmaDigital', {static:true}) signaturePadElement:any;
   signaturePad:any;
   firma:any;

  constructor() { }

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
     window.URL.revokeObjectURL(url);
   }
  }

  URLtoBlob(dataURL:any){
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

}
