import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EarnedMoney, Transfer } from 'src/app/xmodels/wallet';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  dataForTransfer: Transfer;
  nombre: string;
  banco: string;
  bancoClabe: string;
  email: string;
  dataEarnedMoney: EarnedMoney;
  saldoTotal: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private srvWallet: WalletService,
  ) { }

  ngOnInit() {
    this.getDataTransfer();
    this.getSaldo();
  }

  getDataTransfer(){
    const token = localStorage.getItem('token');
    this.srvWallet.getTransfer(token).subscribe(
      (res) => {
        this.dataForTransfer = res;
        this.nombre = this.dataForTransfer.nombre;
        this.banco = this.dataForTransfer.banco;
        this.bancoClabe = this.dataForTransfer.bancoClabe;
        this.email = this.dataForTransfer.email;
      }
    );
  }

  getSaldo(){
    const token = localStorage.getItem('token');
    this.srvWallet.getEarnedMoney(token).subscribe(
      (res) => {
        this.dataEarnedMoney = res;
        this.saldoTotal = this.dataEarnedMoney.saldoTotal;
      }
    );
  }


}
