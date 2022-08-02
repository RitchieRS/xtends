export interface InfoFacebook {
    idError: number;
    resp:    Resp[];
}

export interface Resp {
    id:      number;
    tipo:    string;
    mensaje: string;
    img:     string;
}