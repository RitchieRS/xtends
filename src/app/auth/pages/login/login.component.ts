import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/xservices/auth/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    user:[''],
    pass:['']
  })

  constructor(private login : LoginService, private fb : FormBuilder) { }

  ngOnInit() {}

  onLogin(): void{
    const formValue = this.loginForm.value;
    console.log(formValue);
  }

}
