import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(
    private router: Router,
    private location: Location) { }

  ngOnInit() {
  }

  back(): void{
    this.location.back();
  };

}
