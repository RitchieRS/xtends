import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sporcentaje-inf',
  templateUrl: './sporcentaje.component.html',
  styleUrls: ['./sporcentaje.component.scss'],
})
export class SporcentajeComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;

  constructor() { }

  ngOnInit() {}

}
