import { Component, OnInit, Input } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

@Component({
  selector: 'app-printcredential',
  templateUrl: './printcredential.component.html',
  styleUrls: ['./printcredential.component.scss'],
})
export class PrintcredentialComponent implements OnInit {

  content: string;

  constructor(private pdfGenerator: PDFGenerator) { }

  pdfDownload() {
    this.content = document.getElementById('Pdfiupck').innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'Order-Invoice.pdf'
    };

    this.pdfGenerator.fromData(this.content, options)
      .then((base64) => {
        console.log('OK', base64);
      }).catch((error) => {
        console.log('error', error);
      });

  }

  ngOnInit() {}

}
