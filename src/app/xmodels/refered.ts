export interface ReferedQR {
    idError: number;
    resp:    Resp;
}

export interface Resp {
    idUsuario:         number;
    codigoRecomendado: string;
    urlQR:             string;
}
