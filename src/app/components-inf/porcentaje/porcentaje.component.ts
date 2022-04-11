import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-porcentaje-inf',
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.scss'],
})
export class PorcentajeComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;

  constructor() { }

  ngOnInit() {}

}