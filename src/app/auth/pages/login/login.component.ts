import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/xservices/auth/login.service';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
  public loginForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private router: Router,private login : LoginService, private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "user": ['', [Validators.required,Validators.minLength(4)]],
      "password": ['', [Validators.required,Validators.minLength(4)]]
    });
  
  }

  onLogin(): void{      
    console.log(this.loginForm.value); 
    this.router.navigate(['home'])
  }
  logChange(event) {
    console.log(event);
  }
  forgotPage(){
    this.router.navigate(['forgot'])
  }

}
