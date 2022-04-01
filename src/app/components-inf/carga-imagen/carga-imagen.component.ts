import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga-imagen-inf',
  templateUrl: './carga-imagen.component.html',
  styleUrls: ['./carga-imagen.component.scss'],
})
export class CargaImagenComponent implements OnInit {
  @Input() idPregunta: number;
    @Input() pregunta: string;
    @Input() respuesta: string;
    @Input() tipo: string;

  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
  }

}
