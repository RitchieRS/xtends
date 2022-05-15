import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';
import { EarnedMoney, Detalle} from 'src/app/xmodels/wallet';



@Component({
  selector: 'app-earned-money',
  templateUrl: './earned-money.component.html',
  styleUrls: ['./earned-money.component.scss'],
})
export class EarnedMoneyComponent implements OnInit {

  dataEarnedMoney: EarnedMoney;
  saldoTotal: number;
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
        this.dataEarnedMoney = res;
        this.saldoTotal = this.dataEarnedMoney.saldoTotal;
        console.log(this.saldoTotal);

        this.detalleAka = this.dataEarnedMoney.detalle;

      }
    );
  }

}
