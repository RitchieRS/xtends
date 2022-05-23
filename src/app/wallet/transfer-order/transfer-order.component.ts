import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoneyTransfer } from 'src/app/xmodels/wallet';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';

@Component({
  selector: 'app-transfer-order',
  templateUrl: './transfer-order.component.html',
  styleUrls: ['./transfer-order.component.scss'],
})
export class TransferOrderComponent implements OnInit {
  idAk: number;
  noOperacion: string;
  dataTransfer: MoneyTransfer;
  fechaOrden: string;
  nOperation: string;
  cuentaBen: string;
  nombreBen: string;
  baroSolicitado: number;
  banco: string;
  mail: string;
  constructor(
    private route: ActivatedRoute,
    private srvWallet: WalletService,
    ) { }




  ngOnInit() {
    this.noOperacion = this.route.snapshot.paramMap.get('noOperacion');
    this.getTranExitoz();
  }

  getTranExitoz(){
    const token = localStorage.getItem('token');
    this.srvWallet.getTransferExitosa(token,this.noOperacion).subscribe(
      (res) =>{
        console.log(res);
        this.dataTransfer = res['resp'];
        this.baroSolicitado = this.dataTransfer.saldo;
        console.log(this.baroSolicitado);
        this.fechaOrden = this.dataTransfer.fecha;
        this.nOperation = this.dataTransfer.noOperacion;
        this.cuentaBen = this.dataTransfer.cuenta;
        this.nombreBen = this.dataTransfer.beneficiario;
        this.banco = this.dataTransfer.banco;
        // this.mail = this.dataTransfer.mail;
    });
  }

}
