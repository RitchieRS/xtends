import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

constructor(
    private router: Router
) { }

ngOnInit(): void {
    this.router.events.subscribe(e => {
        if (e instanceof ActivationStart && e.snapshot.outlet === "errorpage")
            this.outlet.deactivate();
    });
}
}
