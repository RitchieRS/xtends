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
  dataTransferok: MoneyTransfer;
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
        this.dataTransferok = res['resp'];
        this.baroSolicitado = this.dataTransferok.saldo;
        console.log(this.baroSolicitado);
        this.fechaOrden = this.dataTransferok.fecha;
        this.nOperation = this.dataTransferok.noOperacion;
        this.cuentaBen = this.dataTransferok.cuenta;
        this.nombreBen = this.dataTransferok.beneficiario;
        this.banco = this.dataTransferok.banco;
        // this.mail = this.dataTransfer.mail;
    });
  }

}
