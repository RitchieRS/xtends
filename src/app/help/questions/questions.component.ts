import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/xservices/help/help.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  cheData = [
    {
      pregunta:'hgfkasghfksgfhj<br>a qui hay un br vreguerito',
      respuesta: '<strong>aqui vale reata</strong>'
    },
    {
      pregunta:'¿Cómo puedo recuperar mi clave?<br>a qui hay un br vreguerito',
      // eslint-disable-next-line max-len
      respuesta: 'Una vez que te registraste, la aplicación enviará un correo con tu password y usuario;si perdiste este correo, o aún así, no puedes hacer login con tu password, puedes restablecer la contraseña.<br><br> 1. Abre el APP Xtend.<br> 2. Da clic en la frase ¿olvidaste tucontraseña?.3. Recibirás las instrucciones en tu <h3>correo.</h3>'
    },
    {
      pregunta:'hgfkasghfksgfhj<br>a qui hay un br vreguerito',
      respuesta: '<strong>aqui vale reata negrita</strong>'
    }
  ];

  constructor(
    private srvHelp: HelpService
  ) { }

  ngOnInit() {
    this.srvHelp.getHelp().subscribe((res) =>{
      if(res){
        console.log(res);
      }
    });
  }

}
