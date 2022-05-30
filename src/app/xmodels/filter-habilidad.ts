export interface FHabilidad {
    idError: number;
    resp:    RespHabilidad[];
}

export interface RespHabilidad {
    idCliente:     number;
    idProyecto:    number;
    idHabilidad:   number;
    nombre:        string;
    tipo:          string;
    iconServicio:  string;
    colorServicio: string;
    activo:        number;
}