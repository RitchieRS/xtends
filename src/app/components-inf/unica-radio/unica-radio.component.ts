import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unica-radio-inf',
  templateUrl: './unica-radio.component.html',
  styleUrls: ['./unica-radio.component.scss'],
})
export class UnicaRadioComponent implements OnInit {
    @Input() idPregunta: number;
    @Input() pregunta: string;
    @Input() respuesta: string;
    @Input() tipo: string;

  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
  }

}
