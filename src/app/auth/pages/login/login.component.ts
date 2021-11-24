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
      "pass": ['', [Validators.required,Validators.minLength(4)]]
    });
  
  }

  onLogin(): void{      
 
    
    const formValue = this.loginForm.value; 
    this.login.login(formValue).subscribe((res) =>{
        console.log(res['idError']);
        if(res['idError']==0){
          this.router.navigate(['home'])
        }else{
          this.isSignUpFailed = true;
        }
      })
    
  }
  logChange(event) {
    console.log(event);
  }
  forgotPage(){
    this.router.navigate(['forgot'])
  }

}
