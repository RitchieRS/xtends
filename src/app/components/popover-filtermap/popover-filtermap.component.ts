import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-popover-filtermap',
  templateUrl: './popover-filtermap.component.html',
  styleUrls: ['./popover-filtermap.component.scss'],
})
export class PopoverFiltermapComponent implements OnInit {
  filterMap: FormGroup;

  constructor(fb: FormBuilder) {
    this.filterMap = fb.group({
      promotoria: false,
      demostradores: false,
      mystery: false,
      anaquelista: false,
    });
   }

  ngOnInit() {}

}
