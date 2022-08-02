import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InfoFacebook, Resp } from 'src/app/xmodels/facebook';
import { Social, SocialShare } from 'src/app/xmodels/social';
import { InfoService } from 'src/app/xservices/user/info.service';
@Component({
  selector: 'app-facebook-share',
  templateUrl: './facebook-share.component.html',
  styleUrls: ['./facebook-share.component.scss'],
})
export class FacebookShareComponent implements OnInit {
  
  constructor(private socialSharing: SocialSharing, private srvPerfil: InfoService ) { }
  resp:InfoFacebook;
  respuesta:Resp;

  text:string;
  url:string;
  tipo = 'facebook';
  ngOnInit() {

    this.srvPerfil.getSocialShare(this.tipo).subscribe((res)=>{
      console.log(res);
      this.resp = res;
      if(this.resp.idError==0){
        this.respuesta =  this.resp.resp[0];
        this.text = this.respuesta.mensaje;
        this.url = this.respuesta.img;
      }
    })
  }

  shareFacebook(){
    console.log("algo")
    ///alert("Hello facebook");
    this.socialSharing.shareViaFacebook(this.text, this.url, 'https://xtendapp.com').then((res) => {
     // alert("Hello facebook");
    }).catch((e) => {
      alert(e);
    });
  }

}
