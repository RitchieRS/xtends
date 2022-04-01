import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sunica-radio',
  templateUrl: './sunica-radio.component.html',
  styleUrls: ['./sunica-radio.component.scss'],
})
export class SunicaRadioComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;
  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
    console.log('SUNICA-RADIO');
  }
}
