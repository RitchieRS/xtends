export interface Sondeo {
    idError: number;
    resp:    Resp;
}

export interface Resp {
    idSondeo:    number;
    sondeo:      string;
    orden:       number;
    capturaSKU:  number;
    obligatorio: number;
    iterativo:   number;
    preguntas:   Pregunta[];
}

export interface Pregunta {
    idPregunta:       number;
    pregunta:         string;
    tipo:             string;
    puntaje:          number;
    obligatorio:      number;
    dependePregunta:  number;
    dependeRespuesta: number;
    urlImage:         string;
    orden:            number;
    minimo:           number;
    maximo:           number;
    opciones:         Opcione[];
}

export interface Opcione {
    idOpcion:    number;
    opcion:      string;
    obligatorio: number;
    puntos:      number;
    orden:       number;
}
