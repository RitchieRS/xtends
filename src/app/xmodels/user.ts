export type Role = 'SUSCRIPTOR' | 'ADMIN';
export interface User {
    user: string;
    pass: string;
    lat: any;
    lgn: any;
}
export interface UserResponse{
    idError : number;
    resp: MiddleUser;
}
export interface MiddleUser{
    usuario : UserRest;
}
export interface UserRest{
    apat: string;
    email: string;
    fecha: string;
    nombre: string;
    nombreCompleto: string;
    token: string;
    confirmaEmail: string;
}
export interface UserRegister{
    name:  string;
    apat:  string;
    email: string;
    phone: string;
    pass:  string;
}
export interface UserRegisterResponse{
    idError : number;
    resp: MiddleUser;
}

export interface UserProfile {
    idError: number;
    resp:    ProfileResp;
}

export interface ProfileResp {
    idUsuario:    number;
    nombre:       string;
    email:        string;
    calificacion: number;
    nivelesDatos: NivelesDatos;
    informacion:  Informacion;
    zonaInteres:  ZonaInteres;
    capacitacion: Capacitacion;
    credenciales: Credenciales;
    nivelXtender: NivelXtender;
}

export interface Capacitacion {
    habilidades: Habilidades;
}

export interface Habilidades {
    // lo comento esb
    // "Envío de información por plataforma": EnvíoDeInformaciónPorPlataforma;
    // "Ingreso a tienda por personal":       EnvíoDeInformaciónPorPlataforma;
    idHabilidad:   number;
    habilidad:     string;
    servicio:      string;
    colorServicio: string;
    iconServicio:  string;
    avance:        number;
    cursos:        CursoHead[];
}

export interface CursoHead {
    idCurso: number;
    tipo:    string;
    nombre:  string;
    avance:  number;
}

// lo comento esb
// export interface EnvíoDeInformaciónPorPlataforma {
//     color:  Color;
//     cursos: Curso[];
// }

export interface Color {
    color: string;
}

// lo comento esb
// export interface Curso {
//     nombre:          string;
//     mecanica:        string;
//     puntajePosible:  number;
//     puntajeObtenido: number;
//     score:           number;
//     aprobado:        number;
// }

export interface Credenciales {
    puesto:   string;
    foto:     string;
    imss:     string;
    rfc:      string;
    urlFirma: string;
    urlCredencialImg: string;
    urlCredencialPDF: string;
}

export interface Informacion {

    nombre:          string;
    apat:            string;
    amat:            string;
    email:           string;
    movil:           string;
    fechaNacimiento: Date;
    dirCalle:        string;
    dirNumExt:       string;
    dirNumInt:       string;
    dirColonia:      string;
    dirAlcadia:      string;
    dirCd:           string;
    dirCP:           string;
    banco: string;
    bancoClabe: string;
    bancoTarjeta: string;
    bancoTitular: string;
}

export interface InfoBank {
  banco: string;
  bancoClabe: string;
  bancoTarjeta: string;
  bancoTitular: string;
  terminosBanco: boolean;
}



export interface NivelesDatos {
    datosCompletos:   string;
    referidosInvitados: string;
    fotoID:             number;
}


export interface ZonaInteres {
}


export interface InfoCred {
    puesto?:           string;
    imss?:             string;
    rfc?:              string;
    terminos?:         boolean;
}

export interface NivelXtender{
    name: string;
    partsNivel: PartsNivel;
}

export interface PartsNivel {
    uno:    number;
    dos:    number;
    tres:   number;
    cuatro: number;
}

