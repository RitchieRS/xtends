import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss'],
})
export class MovementComponent implements OnInit {

  detallemovimientos =[
    {
      movimiento:'Autozone',
      mision:'Promotoría',
      fecha:'13.oct.2021',
      operacion:'+',
      monto:'250.00',
      moneda:'mx',
      estado:'liberado',
      colorServicio:'#7fb73f'
    },
    {
      movimiento:'Toks Delivery',
      mision:'Mystery Shopper',
      fecha:'10.oct.2021',
      operacion:'+',
      monto:'120.00',
      moneda:'mx',
      estado:'pago por liberar',
      colorServicio:'#020c3a'
    },
    {
      movimiento:'Pago IZZI',
      mision:'Mystery Shopper',
      fecha:'6.oct.2021',
      operacion:'-',
      monto:'120.00',
      moneda:'mx',
      estado:'pago de servicio',
      colorServicio:'red'
    },
  ];

  constructor() { }

  ngOnInit() {}

}
