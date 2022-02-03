import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovimientoResponse, Movimiento } from 'src/app/xmodels/movements';
import { WalletResponse } from 'src/app/xmodels/wallet';
import { WalletService } from 'src/app/xservices/wallet/wallet.service';


@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss'],
})
export class MovementComponent implements OnInit {

  dataWallet:MovimientoResponse;
  saldoPendiente = 0.0;
  saldoTotal=  0.0;
  totalGanado=  0.0;
  movimientos: Movimiento[];

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
  nombreCliente: any;
  nombreServicio: any;
  cadena: Movimiento[];

  constructor(private route: ActivatedRoute,private srvWallet : WalletService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvWallet.getWalletMovements(token).subscribe((res) =>{
      if(res){
        this.dataWallet = res;
        this.saldoPendiente = this.dataWallet.saldoPendiente;
        this.saldoTotal = this.dataWallet.saldoTotal;
        this.totalGanado = this.dataWallet.totalGanado;
        this.movimientos = this.dataWallet.movimientos;
     
       
        this.movimientos.forEach((move: Movimiento) => {
          move.color = this.color(move.idEstatus);
      });
        console.log(this.movimientos);


      }
    })
  }

  color(idColor:number):string{
  let colorEx ="#7fb73f";
  console.log(idColor);
  switch(idColor) {
    case 1: {
      colorEx ="#7fb73f";
      break;
    }
    case 2: {
      colorEx ="#825aa5";
      break;
    }
    case 3: {
      colorEx ="#229bd6";
      break;
    }
    default: {

    }
      colorEx ="#7fb73f";
      break;
    }
    return colorEx;
  }

}
