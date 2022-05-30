import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Servicio, WalletResponse} from 'src/app/xmodels/wallet';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {

  dataWallet: WalletResponse[];
  servicios: Servicio[];
  mysaldoPendiente = 0.00;
  mySaldoTotal=0.00;
  dataWalletok: any;




  constructor(
    private route: ActivatedRoute,
    private srvWallet: WalletService,
    private location: Location
    ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvWallet.getWalletInformation(token).subscribe((res) =>{
      if(res){
        this.dataWallet = res.resp;
        console.log(this.dataWallet);
        this.dataWalletok = this.dataWallet;
        this.mySaldoTotal = this.dataWalletok.saldoTotal;
        console.log(this.mySaldoTotal);
        this.mysaldoPendiente = this.dataWalletok.saldoPendiente;
        // this.mySaldoTotal = this.dataWallet.saldoTotal;
        // this.saldoPendiente = (this.dataWallet.saldoPendiente == null ) ? 0:this.dataWallet.saldoPendiente;
        // this.saldoTotal = this.dataWallet.saldoTotal==null ? 0: this.saldoTotal;
        // this.saldoTotal = this.dataWallet.saldoTotal;
        // this.servicios = this.dataWallet.servicios;
        // this.saldoTotalOk= this.dataWallet.saldoTotal;
        // console.log(this.saldoTotalOk);
      }
    });
  }

}
