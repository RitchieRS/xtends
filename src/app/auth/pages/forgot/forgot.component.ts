import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/xservices/auth/login.service';
import { FormGroup,Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
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
  constructor(private router: Router,private login : LoginService, private fb : FormBuilder,private toastCtrl: ToastController) { }

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
   this.presentToast("Se te ha enviado un email.")
    
    const formValue = this.forgotForm.value; 
    this.login.forgot(formValue).subscribe((res) =>{
        console.log(res['idError']);
        if(res['idError']==0){
          this.router.navigate(['login'])
        }else{
          this.isSignUpFailed = true;
        }
      })
    
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }
 

}
