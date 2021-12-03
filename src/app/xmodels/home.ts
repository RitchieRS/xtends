export interface ReqHome{
    Autorization: string;
}

export interface Home {
    section1: Section1;
    section2: Section2;
    section3: Section3;
    section4: Section4;
}

export interface Section1 {
    name:    string;
    content: Section1Content[];
}

export interface Section1Content {
    idTienda:        number;
    idProyecto:      number;
    nombreCliente:   string;
    logoCliente:     string;
    cadena:          string;
    sucursal:        string;
    nombreActividad: string;
    actividad:       string;
    fechaAlta:       Date;
    pago:            string;
}

export interface Section2 {
    name:    string;
    content: Section2Content[];
}

export interface Section2Content {
    id:  number;
    img: string;
    titulo: string;
    descripcion: string;
}

export interface Section3 {
    name:    string;
    content: Section3Content[];
}

export interface Section3Content {
    idTienda:        number;
    idProyecto:      number;
    nombreActividad: string;
    descripcion:     string;
    pago:            string;
    nivel:           number;
    detalle:         Detalle;
}

export interface Detalle {
    canal:    string;
    cadena:   string;
    sucursal: string;
    tiempo:   string;
    estado:   string;
    ciudad:   string;
}

export interface Section4 {
    name:    string;
    content: Section4Content[];
}

export interface Section4Content {
    idTienda:   number;
    idProyecto: number;
    canal:      string;
    cadena:     string;
    sucursal:   string;
    tiempo:     string;
    estado:     string;
    ciudad:     string;
    lat:        number;
    long:       number;
}
