import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snumerica-inf',
  templateUrl: './snumerica.component.html',
  styleUrls: ['./snumerica.component.scss'],
})
export class SnumericaComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;

  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
    console.log('SNUMERICA');
  }

}
