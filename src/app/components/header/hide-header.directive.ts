import { Directive, OnInit, Input, Renderer2, HostListener } from '@angular/core';

import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit {

  @Input('appHideHeader') header: any;

  private lastY = 0;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController
  ) {}


  ngOnInit(): void {

    this.header = this.header.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 700ms');
    });
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {


    if ($event.detail.scrollTop > this.lastY) {
      this.domCtrl.write(() => {
          this.renderer.setStyle(this.header, 'margin-top', `-${ this.header.clientHeight }px`);
          this.renderer.setStyle(this.header, 'opacity', '0.3');

      });
  } else {
      this.domCtrl.write(() => {
          this.renderer.setStyle(this.header, 'margin-top', '0px');
          this.renderer.setStyle(this.header, 'opacity', '1');
      });
  }
  this.lastY = $event.detail.scrollTop;
  }


}
