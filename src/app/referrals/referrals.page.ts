import { Component, OnInit } from '@angular/core';
import { MissionsRef } from '../xmodels/refered';
import { ReferedService } from '../xservices/refered/refered.service';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.page.html',
  styleUrls: ['./referrals.page.scss'],
})
export class ReferralsPage implements OnInit {

  token: string;
  coder: string;
  code: string;
  qrimage: string;

  misionesRe: any;

  srvRefTest: any;
  laVenenoza: any;


  constructor(
    private srvRefe: ReferedService,
    ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.srvRefe.getCodeRefered(this.token).subscribe((res) =>{
     this.code = res.resp.codigoRecomendado;
     this.qrimage = res.resp.urlQR;
     localStorage.setItem('referido', this.code);

     this.misionesRe = Object.values(res.resp.misiones);
     console.log(this.misionesRe);

    //  this.srvRefe.getMissRefPorIdPV(this.token).subscribe(() =>{

    //  });
    });
  }



}
