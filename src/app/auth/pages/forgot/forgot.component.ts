import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/xservices/auth/login.service';
import { FormGroup,Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {

  public forgotForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted =false; 
  constructor(private router: Router,private login : LoginService, private fb : FormBuilder) { }

  get f(): { [key: string]: AbstractControl } {
    return this.forgotForm.controls;
  }


  ngOnInit() {
    this.forgotForm = this.fb.group({
      "email": ['', [Validators.required,
                    Validators.email]],
    });
  }
  onForgot(): void{  
    this.submitted =true;  
    console.log("ya casi")   
 
    
    /*const formValue = this.loginForm.value; 
    this.login.login(formValue).subscribe((res) =>{
        console.log(res['idError']);
        if(res['idError']==0){
          this.router.navigate(['home'])
        }else{
          this.isSignUpFailed = true;
        }
      })*/
    
  }

}
