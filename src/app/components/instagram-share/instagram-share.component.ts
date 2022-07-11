import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Share } from '@capacitor/share';
import { Social, SocialShare } from 'src/app/xmodels/social';
import { InfoService } from 'src/app/xservices/user/info.service';
@Component({
  selector: 'app-instagram-share',
  templateUrl: './instagram-share.component.html',
  styleUrls: ['./instagram-share.component.scss'],
})
export class InstagramShareComponent implements OnInit {

  constructor(private socialSharing: SocialSharing,private srvPerfil: InfoService) { }

  
  resp:SocialShare;
  respuesta:Social;

  text:string;
  url:string;
  tipo = 'facebook';

  ngOnInit() {

    this.srvPerfil.getSocialShare(this.tipo).subscribe((res)=>{
      console.log(res);
      this.resp = res;
      if(this.resp.idError==0){
        this.respuesta =  this.resp[0];
        this.text = this.respuesta.mensaje;
        this.url = this.respuesta.img;
      }
    })
  }

 async shareInstagram(){
    console.log("algo")
    //alert("Hello Instagram");
    await Share.share({
      title: this.text,
      text: this.text,
      url: this.url
    });
  }

}
