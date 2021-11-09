import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/xservices/auth/login.service';
import {  FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
  public loginForm: FormGroup;
  public user: any; 
  myInput:any;
  constructor(private router: Router,private login : LoginService, private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user = {
      user: null,
      password: null
    }
  }

  onLogin(): void{

    //this.user.user = (<HTMLInputElement>document.getElementById("userfield")).value;
    //this.user.password = (<HTMLInputElement>document.getElementById("passfield")).value;
  
    console.log(this.loginForm.value); 
    console.log(this.user);
  

    /* this.user.login = this.loginForm.value.login;
    this.user.eMail = this.loginForm.value.email;
    this.user.password = this.loginForm.value.confirmedPassword; */

   
    
  }
  logChange(event) {
    console.log(event);
  }
  forgotPage(){
    this.router.navigate(['forgot'])
  }

}
