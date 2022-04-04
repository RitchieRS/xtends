import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sdecimal-inf',
  templateUrl: './sdecimal.component.html',
  styleUrls: ['./sdecimal.component.scss'],
})
export class SdecimalComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;

  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
    console.log('Sdecimal');
  }

}
