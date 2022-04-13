import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcheckin',
  templateUrl: './dialogcheckin.component.html',
  styleUrls: ['./dialogcheckin.component.scss'],
})
export class DialogcheckinComponent implements OnInit {

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit() {}

  training(){
    this.dialog.closeAll();
    this.router.navigate(['trainings-list']);
  }

}
