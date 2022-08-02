export interface CursoIntf {
    idError: number;
    resp:    RespCurso;

}

export interface RespCurso {
    cursos: Curso[];
}

export interface Curso {
    idCurso:       number;
    tipoCurso:     string;
    nombreCurso:   string;
    temaCurso:     string;
    mecanicaCurso: string;
    urlMaterial1:  string;
    urlMaterial2:  string;
    urlMaterial3:  string;
    urlMaterial4:  string;
    urlMaterial5:  string;
}



export interface HabilidadesAll {
    habiliades: Habiliadelist[];
}

export interface Habiliadelist {
    idHabilidad:   number;
    habilidad:     string;
    servicio:      string;
    colorServicio: string;
    iconServicio:  string;
    avance:        number;
    cursos:        Curso[];
}

export interface Curso {
    idCurso: number;
    tipo:    Tipo;
    nombre:  string;
    avance:  number;
}

export enum Tipo {
    Básica = "Básica",
}

