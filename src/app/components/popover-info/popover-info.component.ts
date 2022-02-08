import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  public filterForm: FormGroup;
  constructor(
              private router: Router,
              private storage: StorageHelperService,
              private fb : FormBuilder) { }
              

  ngOnInit() {

    this.filterForm = this.fb.group({
      "type": ['', [Validators.required]],
      "date": ['', [Validators.required,Validators.minLength(4)]]
    });
    
  }


  filter(){
    const formValue = this.filterForm.value;
    console.log(formValue);
    this.storage.setObject('filter',formValue.type);
     window.location.reload();
  }






}
