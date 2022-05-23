import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer-order',
  templateUrl: './transfer-order.component.html',
  styleUrls: ['./transfer-order.component.scss'],
})
export class TransferOrderComponent implements OnInit {
  


  noOperacion:number;
  constructor( private route: ActivatedRoute) { }




  ngOnInit() {
    this.noOperacion = Number(this.route.snapshot.paramMap.get('noOperacion'));
  }

}
