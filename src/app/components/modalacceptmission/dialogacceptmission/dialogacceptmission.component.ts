import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dialogacceptmission',
  templateUrl: './dialogacceptmission.component.html',
  styleUrls: ['./dialogacceptmission.component.scss'],
})
export class DialogacceptmissionComponent implements OnInit {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: {message:string},private router: Router,private matDialog: MatDialog) {
    

   }
   @ViewChild(RouterOutlet) outlet: RouterOutlet;
   ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    }); 
   }


    home() : void{
    this.matDialog.closeAll();
    this.router.navigate(['home'])
    }
    missionPending(): void{
      this.matDialog.closeAll();
      this.router.navigate(['pending-mission'])
    }

 
  

  


}
