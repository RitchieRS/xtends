import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sku-section',
  templateUrl: './sku-section.component.html',
  styleUrls: ['./sku-section.component.scss'],
})
export class SkuSectionComponent implements OnInit {

   
    @Input() preguntas: any[];
   

  constructor()
  {

  }

  ngOnInit() {
     console.log(this.preguntas[0])
  }

}
