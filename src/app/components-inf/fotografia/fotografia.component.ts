import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotografia-inf',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.scss'],
})
export class FotografiaComponent implements OnInit {
  @Input() idPregunta: number;
    @Input() pregunta: string;
    @Input() respuesta: string;
    @Input() tipo: string;

  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
  }

}
