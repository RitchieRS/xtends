import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-inf',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;
  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
  }

}
