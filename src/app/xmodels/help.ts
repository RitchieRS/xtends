export interface Help{
  idError: number;
  resp: RespHelp[];
}

 export interface RespHelp{
   idFaq: number;
   pregunta: string;
   respuesta: string;
 }
