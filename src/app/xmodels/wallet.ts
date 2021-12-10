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

