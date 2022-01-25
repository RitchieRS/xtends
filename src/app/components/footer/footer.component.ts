import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  algo='algodon';
  constructor(private router: Router) { }
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });
  }

  profile(){
    this.router.navigate(['profile'])
  }
  wallet(){
    this.router.navigate(['wallet/main'])
  }
  home(){
    this.router.navigate(['home'])
  }

}
