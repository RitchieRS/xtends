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
    confirmaEmail:string;
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
    nivelXtender: string;
    nivelesDatos: NivelesDatos;
    informacion:  Capacitacion;
    zonaInteres:  Capacitacion;
    capacitacion: Capacitacion;
    accesos:      Accesos;
}

export interface Accesos {
    credencias:  string;
    cartaAcceso: string;
}

export interface Capacitacion {
}

export interface NivelesDatos {
    datosComplemento:   string;
    referidosInvitados: string;
    fotoID:             number;
}


