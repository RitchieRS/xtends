
export interface ReqMission {
    idTienda: number;
    idProyecto:  number;
}
export interface Mission {
    idError: number;
    resp:    Resp;
}

export interface Resp {
    idUsuario:       number;
    idTienda:        number;
    idProyecto:      number;
    nombreCliente:   string;
    nombreActividad: string;
    pago:            string;
    nivel:           number;
    detalle:         Detalle;
    certificados:    Certificados;
}

export interface Certificados {
    c1: C1;
    c2: C1;
    c3: C1;
}

export interface C1 {
    nombre: string;
}

export interface Detalle {
    canal:    string;
    cadena:   string;
    sucursal: string;
    tiempo:   string;
    estado:   string;
    ciudad:   string;
}
