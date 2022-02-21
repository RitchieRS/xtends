import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { InfoService } from 'src/app/xservices/user/info.service';

@Component({
  selector: 'app-modalcodigo',
  templateUrl: './modalcodigo.component.html',
  styleUrls: ['./modalcodigo.component.scss'],
})
export class ModalcodigoComponent implements OnInit{

@Input() codeReco : string;

constructor(public dialog: MatDialog,private fb : FormBuilder) { 
  console.log(this.codeReco);
}

  ngOnInit(): void {
    
  }

  
openDialog() {
    this.dialog.open(DialogCodigo,{});
  }
}
@Component({
  selector: 'dialogcodigo',
  templateUrl: './dialogcodigo.html',
})
export class DialogCodigo implements OnInit{
  
  constructor(private fb : FormBuilder, private infSrv : InfoService) { 
    
  }
  public refealGroup: FormGroup;
  ngOnInit(): void {
    this.refealGroup = this.fb.group({
      "email": ['', [Validators.required]],
      "name": ['', [Validators.required]],
      "lastname": ['', [Validators.required]],
    });
  }
 
    submit(){
      console.log("abierta");
      
      const token = localStorage.getItem('token');
      const mailData = {
        type: "referred",
        email:this.refealGroup.get('email').value
      }
      console.log(mailData );

      this.infSrv.sendMail(token,mailData).subscribe((res) =>{
       console.log(res)
      
       
       })

  
    }
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
