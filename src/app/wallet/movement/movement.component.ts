import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  dataWallet: any;
  saldoPendiente = 0.0;
  saldoTotal=  0.0;
  totalGanado=  0.0;
  movimientos: Movimiento[];
  movimientosdtc: FormGroup;
  submitted = false;
  movimientosArray: any[]=[];
  putiMovimientos: number;
  movimientosFiltradas: any;

  nombreCliente: any;
  nombreServicio: any;
  cadena: Movimiento[];


  constructor(
    private route: ActivatedRoute,
    private srvWallet: WalletService,
    private fb: FormBuilder
    ) {
      this.movimientosdtc = this.fb.group({
        startDate: ['',Validators.required],
        endDate: ['',Validators.required],
      });
     }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvWallet.getWalletMovements(token).subscribe((res) =>{
      if(res){
        this.dataWallet = res.resp;
        console.log(res);
        this.saldoPendiente = (this.dataWallet.saldoPendiente==null) ? 0  : this.dataWallet.saldoPendiente;
        this.saldoTotal = (this.dataWallet.saldoTotal==null )? 0 :this.dataWallet.saldoTotal;
        this.totalGanado = this.dataWallet.totalGanado;
        this.movimientos = this.dataWallet.movimientos;
        this.movimientos.forEach((move: Movimiento) => {
          move.color = this.color(move.idEstatus);
      });
        console.log(this.movimientos);


      }
    });
  }

  filterMovimientos(){
    this.submitted = true;
    if(this.movimientosdtc.invalid){
      return;
    }
    const movimientosArray = this.movimientos;

    const fechaInicialDPicker = this.movimientosdtc.value.startDate.getTime()-42366000;
    const fechaFinalDPicker = this.movimientosdtc.value.endDate.getTime()+42366000;
    console.log(fechaInicialDPicker-42366000, fechaFinalDPicker+42366000) ;

    const missionsEnRangod = putiMovimientos =>
    putiMovimientos.fechaUnix >= fechaInicialDPicker
    && putiMovimientos.fechaUnix <= fechaFinalDPicker;

    const movimientosFiltradas = movimientosArray.filter(missionsEnRangod);
    console.log(movimientosFiltradas);
    this.movimientosFiltradas = movimientosFiltradas;
  }

  returnTheFilter(){
    this.movimientosFiltradas = 0;
    console.log(this.movimientosFiltradas);
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
