export type Role = 'SUSCRIPTOR' | 'ADMIN';
export interface User {
    user: string;
    pass: string;
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


