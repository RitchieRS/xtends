import { Component, Input, OnInit } from '@angular/core';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';

@Component({
  selector: 'app-section-inf',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {

isValid = 0;


@Input() capturaSKU: number;
@Input() idProyecto: number;
@Input() idSondeo: number;
@Input() iterativo: number;
@Input() obligatorio: number;
@Input() orden: number;
@Input() respuestas: any[];
@Input() sondeo: string [];

idSondeoStr: string;
preguntasAux: any;

  constructor(private storage: StorageHelperService) {
  }

  ngOnInit() {
    console.log(this.respuestas);
    //console.log(independientes)
    //console.log(this.preguntasAux);
    this.idSondeoStr = this.idSondeo.toString();
  }
}
