import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/xservices/auth/login.service';
import { FormGroup,Validators, FormBuilder,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  isRegisterFailed = false;
  confirmPass = false;
  errorMessage = '';
  submitted =false; 
  constructor(private router: Router,private register : LoginService, private fb : FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      "name": ['', [Validators.required,Validators.minLength(4)]],
      "apat": ['', [Validators.required,Validators.minLength(4),Validators.pattern(/^\S*$/)]],
      "email": ['', [Validators.required,
                    Validators.email,Validators.pattern(/^\S*$/)]],
      "phone": ['',[Validators.required, Validators.pattern("^[0-9]*$"),
      Validators.minLength(8)]],
      "pass": ['', [Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
      "repass": ['', [Validators.required]],
    });
  
  }
  Trim(){
    console.log('contains spaces')
  this.registerForm.controls['email'].valueChanges
    .subscribe(x=>{
      if(x.includes(' ')){
        console.log('contains spaces')
        this.registerForm.controls['email'].setValue(x.trim())
      }else{
        console.log('does not contain spaces')
      }
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  async onRegister(){
    this.submitted = true;
    const formValue = this.registerForm.value; 
    if (this.registerForm.invalid) {
      return;
    }
    if(this.registerForm.value.pass!=this.registerForm.value.repass){
      this.confirmPass=true;
      return;
    }
    this.confirmPass=false;
    console.log("Todo Ok");
     await this.register.register(formValue).subscribe((res) =>{
      console.log(res['idError']);
      if(res['idError']==0){
        this.registerForm.reset();
        this.router.navigate(['auth/confirm']);
      }else{
        this.isRegisterFailed = true;
      }
    }) 
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


}
