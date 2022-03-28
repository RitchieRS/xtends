export interface SondeoInf {
    idError: number;
    resp:    RespInf[];
}

export interface RespInf {
    proyecto:     string;
    mecanica:     string;
    logoProyecto: string;
    formato:      string;
    sucursal:     string;
    estado:       string;
    fecha:        Date;
    sondeos:      Sondeo[];
}

export interface Sondeo {
    idSondeo:    number;
    idProyecto:  number;
    sondeo:      string;
    orden:       number;
    capturaSKU:  number;
    obligatorio: number;
    iterativo:   number;
    respuestas:  RespuestaElement[];
}

export interface Producto {
    sku:          string;
    nombre:       string;
    presentacion: string;
    descripcion:  string;
    presencia:    number;
    img:          string;
    preguntas:    Array<RespuestaElement[]>;
}

export interface RespuestaElement {
    idPregunta: number;
    pregunta:   string;
    tipo:       string;
    respuesta?: RespuestaEnum;
    productos?: Producto[];
}

export enum RespuestaEnum {
    NoHayRespuesta = "NO HAY RESPUESTA",
    SinImagen = "SIN IMAGEN",
}
