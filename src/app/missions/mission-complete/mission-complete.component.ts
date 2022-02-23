import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mission-complete',
  templateUrl: './mission-complete.component.html',
  styleUrls: ['./mission-complete.component.scss'],
})
export class MissionCompleteComponent implements OnInit {
  idPV: string;


  constructor(private router: Router,) { }

  myMissions(){
    this.router.navigate(['/mymissions/']);
  }

  homeLink(){
    this.router.navigate(['home']);
  }

  ngOnInit() {}

}
