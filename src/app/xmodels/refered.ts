export interface ReferedQR {
    idError: number;
    resp:    Resp;
}

export interface Resp {
    idUsuario:         number;
    codigoRecomendado: string;
    urlQR:             string;
    missiones: MissionsRef;
}

export interface MissionsRef {
  colorServicio: string;
  descripcion: string;
  detalle: DetalleMissionRef;
  fecha: Date;
  idPV: number;
  idProyecto: number;
  idTienda: number;
  nivel: number;
  nombreActividad: string;
  pago: string;
}

export interface DetalleMissionRef{
  canal: string;
  sucursal: string;
  tiempo: string;
  estado: string;
  ciudad: string;
}


