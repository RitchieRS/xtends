import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { SearchService } from '../../xservices/search/search.service';
import { PopoverController} from '@ionic/angular';
import { PopoverInfoComponent} from '../popover-info/popover-info.component';
@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
})
export class HeaderTwoComponent implements OnInit {

  @Input() titulo = '';


  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  itemsx: any[] = [];
  textoBuscar: string = '';




constructor(
        private router: Router,
        private searchService: SearchService,
        private popoverCtrl: PopoverController
) { }




ngOnInit(): void {
    this.router.events.subscribe(e => {
        if (e instanceof ActivationStart && e.snapshot.outlet === "errorpage")
            this.outlet.deactivate();
    });

    this.searchService.getItemsx().subscribe( itemsx => {
      this.itemsx = itemsx;
    });
}

onSearchChange( event ){
  // console.log(event);
  this.textoBuscar = event.detail.value;
}

gohome(){
  console.log("gohome")
  this.router.navigate(['home']);
}



async presentPopover(ev: any) {
  const popover = await this.popoverCtrl.create({
    component: PopoverInfoComponent,
    event: ev,
    translucent: false,
    mode: 'ios',
    cssClass:'popOver'
  });
  await popover.present();


}

}

