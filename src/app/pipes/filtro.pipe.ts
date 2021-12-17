import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(
    arreglo: any[],
    texto: string = '',
    columna: string = 'title'
    ): any[] {

    if ( texto === '' ){
      return null;
    }
    if ( !arreglo ){
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();
    // console.log(arreglo);
    // console.log(texto);
    // return null;

    return arreglo.filter(
      item => item[columna].toLowerCase().includes( texto )
    )
    ;
  }

}
