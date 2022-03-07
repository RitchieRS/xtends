export interface Sondeo {
    idError: number;
    resp:    Resp[];
}

export interface Resp {
    idSondeo:    number;
    idProyecto:  number;
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
    opciones?:         Opcione[];
    productos?:       Producto[];
}

export interface Opcione {
    idOpcion:    number;
    opcion:      string;
    obligatorio: number;
    puntos:      number;
    orden:       number;
}

export interface Producto {
    sku:          string;
    nombre:       string;
    presentacion: string;
    descripcion:  string;
    presencia:    number;
    img:          string;
    preguntas:    ProductoPregunta[];
}

export interface ProductoPregunta {
    idPregunta:       string;
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
}

