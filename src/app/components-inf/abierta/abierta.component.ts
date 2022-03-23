import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-abierta-inf',
  templateUrl: './abierta.component.html',
  styleUrls: ['./abierta.component.scss'],
})
export class AbiertaComponent implements OnInit {
    @Input() idPregunta: number;
    @Input() pregunta: string;
    @Input() respuesta: string;
    @Input() tipo: string;
  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
  }

}
