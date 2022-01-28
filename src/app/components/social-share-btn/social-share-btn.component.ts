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
      text: 'xTendsApp',
      url: 'https://xtendapp.com/',
      dialogTitle: 'Comparte con tus amigos.',
    });
  }

}
