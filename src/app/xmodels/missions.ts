
export interface ReqMission {
    idPV: number;
}
export interface Mission{
    idError: number;
    resp:    RespMission;
}

export interface RespMission {
    idTienda:        number;
    idProyecto:      string;
    nombreCliente:   string;
    imgCliente:   string;
    nombreActividad: string;
    pago:            string;
    nivel:           number;
    detalle:         Detalle;
    habilidades:     Habilidades[];
    iconServicio: string;
    colorServicio: string;
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

export interface ResMissionAccepted {
    idError: number;
    resp:    RespMission;
}

export interface RespMission {
    msg: string;
}


export interface AMission {
    section1: MisionSection1;
    section2: MisionSection2;
    section3: MisionSection3;
}

export interface MisionSection1 {
    name:    string;
    content: ContentMission[];
}


export interface MisionSection2 {
    name:    string;
    content: ContentMission[];
}

export interface MisionSection3 {
  name:    string;
  content: ContentMission[];
}

export interface ContentMission {
  idPV:        number;
  cliente:     string;
  proyecto:    string;
  logoCliente: string;
  cadena:      string;
  sucursal:    string;
  estado:      string;
  ciudad:      string;
  comentarios: string;
  tiempo:      string;
  pago:        string;
}
