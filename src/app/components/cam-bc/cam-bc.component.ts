import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-cam-bc',
  templateUrl: './cam-bc.component.html',
  styleUrls: ['./cam-bc.component.scss'],
})
export class CamBcComponent implements AfterViewInit , OnInit {

  data: any;

  productInformation=null
  barCode:any;
  constructor(private barcodeScanner: BarcodeScanner) { }
  @Output() barcodeResult = new EventEmitter<string>();
  ngAfterViewInit(): void {
     
  }

  ngOnInit() {}

  scan() {
    try{
      this.data = null;
      this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
      this.barcodeResult.emit(this.data.text);
      }).catch(err => {
      console.log('Error', err);
      });
    }catch(e){
      alert(e)
    }
  }

  

}
