
export interface ReqMission {
    idTienda: number;
    idProyecto:  number;
}
export interface Mission{
    idError: number;
    resp:    RespMission;
}

export interface RespMission {
    idUsuario:       number;
    idTienda:        number;
    idProyecto:      number;
    nombreCliente:   string;
    nombreActividad: string;
    pago:            string;
    nivel:           number;
    detalle:         Detalle;
    habilidades:     Habilidades[];
}

export interface Detalle {
    canal:    string;
    cadena:   string;
    sucursal: string;
    tiempo:   string;
    estado:   string;
    ciudad:   string;
}

export interface Habilidades {
    idHabilidad:     number;
    nombreNivel:     string;
    nombreHabilidad: string;
}