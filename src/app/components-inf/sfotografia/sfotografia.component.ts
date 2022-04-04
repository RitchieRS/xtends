import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sfotografia-inf',
  templateUrl: './sfotografia.component.html',
  styleUrls: ['./sfotografia.component.scss'],
})
export class SfotografiaComponent implements OnInit {
  @Input() idPregunta: number;
  @Input() pregunta: string;
  @Input() respuesta: string;
  @Input() tipo: string;
  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);
    console.log('Sfotografia');
  }

}
