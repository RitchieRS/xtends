import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-social-share-btn',
  templateUrl: './social-share-btn.component.html',
  styleUrls: ['./social-share-btn.component.scss'],
})
export class SocialShareBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  async shareElement(){
    console.log("Hola Soy un share");
    await Share.share({
      title: 'Usen xtend de mi compa',
      text: 'Esta misión te interesará:Promotoria',
      url: 'https://xtendapp.com/images/img_invitation.jpeg',
      dialogTitle: 'Comparte con tus amigos.',
    });
  }

}
