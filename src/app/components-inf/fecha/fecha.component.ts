import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-inf',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.scss'],
})
export class FechaComponent implements OnInit {

  @Input() idPregunta: number;
    @Input() pregunta: string;
    @Input() respuesta: string;
    @Input() tipo: string;

  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
    console.log(this.respuesta);
  }

}
