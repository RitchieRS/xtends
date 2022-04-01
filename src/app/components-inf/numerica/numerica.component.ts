import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numerica-inf',
  templateUrl: './numerica.component.html',
  styleUrls: ['./numerica.component.scss'],
})
export class NumericaComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;
  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
  }

}
