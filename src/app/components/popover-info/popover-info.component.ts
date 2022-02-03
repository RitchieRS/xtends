import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  public filterForm: FormGroup;
  constructor(private storage: StorageHelperService,
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
  }






}
