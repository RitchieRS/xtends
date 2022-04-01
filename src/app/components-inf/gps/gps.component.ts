import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps-inf',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;
  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
  }

}
