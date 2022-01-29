export interface CheckinReq {
    idPV :       number;
    quien?:      string;
    fecha?:      Date;
    tipo?:       string;
    conteo?:     string;
    contenido?:  Contenido;
    info?:       Info;
    config?:     Config;
    idError: number;
    resp:    string;
}

export interface Config {
    gpsProyecto?:       string;
    resolucionImagen?:  string;
    sondeoObligatorio?: string;
    capturaSku?:        string;
    gpsTienda?:         string;
    rangoTienda?:       string;
}

export interface Contenido {
    idTienda?:     string;
    estadoTienda?: string;
    idSondeo?:     string;
    sku?:          string;
    latitud?:      string;
    longitud?:     string;
    respuestas?:   Respuesta[];
}

export interface CheckInResp {
    idError: number;
    resp:    string;
}

export interface Respuesta {
    idPregunta?: string;
    tipo?:       string;
    size?:       string;
    respuesta?:  string;
}

export interface Info {
    hotspot?:  string;
    conexion?: string;
    brillo?:   string;
    bateria?:  string;
    gps?:      string;
    imei?:     string;
    tag?:      string;
    gps2?:     string;
    version?:  string;
    datos?:    string;
}
