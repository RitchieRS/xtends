// import { expressionType } from '@angular/compiler/src/output/output_ast';

export interface Wallet{
  idError: number;
  resp: WalletResponse[];
}

export interface WalletResponse {
    saldoTotal:     number;
    saldoPendiente: number;
    totalGanado:    number;
    servicios:      Servicio[];
    productos:      Producto[];
}

export interface Producto {
    nombre:      string;
    marca:       string;
    descripcion: string;
    precio:      number;
    img:         string;
}

export interface Servicio {
    nombre: string;
    img:    null;
}


export interface EarnedMoney{
  idError: number;
  resp: RespEarnedMoney[];
}

export interface RespEarnedMoney {
  saldoTotal: number;
  detalle: Detalle[];
}

export interface Detalle {
  idLog: number;
  nombreCliente: string;
  nombreServicio: string;
  saldo: number;
  detalle: string;
  fecha: string;
}

export interface Transfer {
  idError: number;
  resp: RespTransfer[];
}

export interface RespTransfer {
  nombre: string;
  email: string;
  banco: string;
  bancoClabe: string;
}

export interface OrdenTransfer{
  idError: number;
  resp: MoneyTransfer;
}


export interface MoneyTransfer {
  idUsuario: number;
  banco: string;
  beneficiario: string;
  cuenta: string;
  email: string;
  fecha: string;
  noOperacion: string;
  nombre: string;
  saldo: number;

}


