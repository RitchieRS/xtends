import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-inf',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
})
export class MultipleComponent implements OnInit {
  @Input() idPregunta: number;
    @Input() pregunta: string;
    @Input() respuesta: string;
    @Input() tipo: string;

  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
  }

}
