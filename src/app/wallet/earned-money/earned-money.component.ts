import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';
import { RespEarnedMoney, Detalle} from 'src/app/xmodels/wallet';



@Component({
  selector: 'app-earned-money',
  templateUrl: './earned-money.component.html',
  styleUrls: ['./earned-money.component.scss'],
})
export class EarnedMoneyComponent implements OnInit {

  dataEarnedMoney: any;
  saldoTotal: any;
  detalleAka: Detalle[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private srvWallet: WalletService
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvWallet.getEarnedMoney(token).subscribe(
      (res) => {
        console.log(res);
        this.dataEarnedMoney = res.resp;
        this.saldoTotal = this.dataEarnedMoney.saldoTotal!=null || this.dataEarnedMoney.saldoTotal != undefined || this.dataEarnedMoney.saldoTotal != "" ? this.dataEarnedMoney.saldoTotal: "0.00" ;
        console.log(this.saldoTotal);

        this.detalleAka = this.dataEarnedMoney.detalle;

      }
    );
  }

}
