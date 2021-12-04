import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {

  constructor(private route: ActivatedRoute,private srvWallet : WalletService) { }
  
  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvWallet.getWalletInformation(token).subscribe((res) =>{
      if(res){
        console.log(res);
      }
    })
  }

}
