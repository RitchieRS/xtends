export interface SocialShare {
    idError: number;
    resp:    Social[];
}

export interface Social{
    id:      number;
    tipo:    string;
    mensaje: string;
    img:     string;
}
