import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mission-complete',
  templateUrl: './mission-complete.component.html',
  styleUrls: ['./mission-complete.component.scss'],
})
export class MissionCompleteComponent implements OnInit {
  idPV: string;


  constructor(private router: Router,) { }

  missPending(){
    this.router.navigate(['pending-mission/'+this.idPV]);
  }

  homeLink(){
    this.router.navigate(['home']);
  }

  ngOnInit() {}

}
