import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Servicio, WalletResponse } from 'src/app/xmodels/wallet';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {

  dataWallet : WalletResponse;
  servicios: Servicio[];
  saldoPendiente: number;
  saldoTotal: number;

  constructor(private route: ActivatedRoute,private srvWallet : WalletService) { }
  
  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvWallet.getWalletInformation(token).subscribe((res) =>{
      if(res){
        console.log(res);
        this.dataWallet = res;
        this.saldoPendiente = this.dataWallet.saldoPendiente;
        this.saldoTotal = this.dataWallet.saldoTotal; 
        this.servicios = this.dataWallet.servicios;
        
      }
    })
  }

}
