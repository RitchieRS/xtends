import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { InfoService } from 'src/app/xservices/user/info.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modalcodigo',
  templateUrl: './modalcodigo.component.html',
  styleUrls: ['./modalcodigo.component.scss'],
})
export class ModalcodigoComponent implements OnInit{

@Input() codeReco: string;

constructor(public dialog: MatDialog,private fb: FormBuilder) {
  console.log(this.codeReco);
}

  ngOnInit(): void {}


openDialog() {
    this.dialog.open(DialogCodigo,{});
  }
}
@Component({
  selector: 'dialogcodigo',
  templateUrl: './dialogcodigo.html',
})
export class DialogCodigo implements OnInit{

  constructor(
    private fb: FormBuilder,
    private infSrv: InfoService,
    private toastCtrl: ToastController,
    ) {

  }
  public refealGroup: FormGroup;
  ngOnInit(): void {
    this.refealGroup = this.fb.group({
      "email": ['', [Validators.required, Validators.email]],
      "name": ['', [Validators.required]],
      "lastname": ['', [Validators.required]],
    });
  }

  get email(){
    return this.refealGroup.get('email');
  }

  get firstName(){
    return this.refealGroup.get('name');
  }

  get lastName(){
    return this.refealGroup.get('lastname');
  }

    submit(){
      console.log("abierta");

      const token = localStorage.getItem('token');
      const mailData = {
        type: "referred",
        email:this.refealGroup.get('email').value
      }
      if(this.refealGroup.valid==false){
        this.presentToast('¡Ingrese datos correctos!');
        return
      }

      this.infSrv.sendMail(token,mailData).subscribe((res) =>{
       console.log(res);
       this.presentToast('¡Se ha enviado el mail con exito!');

       });
    }

    async presentToast(text) {
      const toast = await this.toastCtrl.create({
        message: text,
        duration: 2000,
        color: 'navybluextend',
        position: 'top',
        mode : 'ios',
      });
      toast.present();
    }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
