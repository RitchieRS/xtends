export interface Movimiento{
  idError: number;
  resp: MovimientoResponse[];
}
export interface MovimientoResponse {
    sucursal: any;
    nombreServicio: any;
    nombreCliente: any;
    saldoTotal:     number;
    saldoPendiente: number;
    totalGanado:    number;
    movimientos:    Movimiento[];
}

export interface Movimiento {
    idLog:          number;
    nombreCliente:  null | string;
    nombreServicio: null | string;
    saldo:          number;
    detalle:        string;
    fecha:          Date;
    estatus:        string;
    idEstatus:      number;
    color :          string;
    sucursal:       string;
    cadena:         string;
}
