import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-instagram-share',
  templateUrl: './instagram-share.component.html',
  styleUrls: ['./instagram-share.component.scss'],
})
export class InstagramShareComponent implements OnInit {

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {}

 async shareInstagram(){
    console.log("algo")
    //alert("Hello Instagram");
    await Share.share({
      title: 'Conviertete en un Xtender',
      text: 'Conviertete en un Xtender',
      url: 'https://xtendapp.com/images/img_invitation.jpeg',
      dialogTitle: 'Comparte con tus amigos.',
    });
  }

}
