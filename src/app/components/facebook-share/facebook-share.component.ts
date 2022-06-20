import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-facebook-share',
  templateUrl: './facebook-share.component.html',
  styleUrls: ['./facebook-share.component.scss'],
})
export class FacebookShareComponent implements OnInit {

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {}

  shareFacebook(){
    console.log("algo")
    ///alert("Hello facebook");
    this.socialSharing.shareViaFacebook(null, null, 'https://xtendapp.com/').then((res) => {
     // alert("Hello facebook");
    }).catch((e) => {
      alert(e);
    });
  }

}
