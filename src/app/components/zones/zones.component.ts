import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';
import { InfoService } from 'src/app/xservices/user/info.service';


@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss'],
})
export class ZonesComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  selected:string[]=[];
  filteredOptions: Observable<string[]>;

  constructor(private srvInf: InfoService,
              private storage: StorageHelperService
              ) { }

  ngOnInit() {
     const token = localStorage.getItem('token');
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

     /*let storedCities = JSON.parse(localStorage.getItem("my_colors"));
     this.selected = storedCities;*/

     this.storage.getObject('zone-stored').then((storedzone: any) => {
       Object.keys(storedzone).forEach(val => {
        //console.log(zones[val]);
        this.selected.push(storedzone[val]);
      });
    });

    this.storage.getObject('zone').then((zones: any) => {
      Object.keys(zones).forEach(val => {
        //console.log(zones[val]);
        this.options.push(zones[val].ciudad+","+zones[val].estado);
      });
     
    });
  }

  delete(str){
    console.log("delete")
    this.selected.forEach((element,index)=>{
      console.log(element)
      if(element==str) {this.selected.splice(index,1)};
   });
   this.storage.setObject('zone-stored',this.selected);
   /*localStorage.setItem("my_colors", JSON.stringify(this.selected));
   this.storage.getObject('zone-stored').then((storedzone: any) => {
       this.selected = storedzone;
    });
    this.storage.setObject('zone-stored',this.selected);
   */
   
  }

  addOption(option){
    try{
    this.selected.push(option)
    this.selected = this.selected.filter((n, i) => this.selected.indexOf(n) === i);
   // localStorage.setItem("my_colors", JSON.stringify(this.selected));
    this.storage.setObject('zone-stored',this.selected);
   }catch(e){
     alert(e);
   }
    //this.myControl.reset();
    //console.dir(this.selected);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


  ciudades = [
    "Tenancingo,Edo. De México",
    "Calvillo,Aguascalientes",
    "LoretoBaja California Norte",
    "Baja California Norte,San Felipe",
    "Baja California Norte,Tecate",
    "Baja California Norte,Tecate",
    "Baja California Sur,Comondú",
    "Baja California Sur,El Vizcaíno",
    "Chiapas,Cintalapa de Figueroa",
    "Chiapas,Huixtla",
    "Chiapas,Palenque",
    "Chiapas,Tonalá",
    "Chiapas,Villaflores",
    "Chihuahua,Camargo",
    "Coahuila,Cd. Sabinas",
    "Coahuila,Melchor Muzquiz",
    "Coahuila,Nava",
    "Coahuila,Nueva Rosita",
    "Coahuila,Parras",
    "Coahuila,Ramos Arizpe",
    "Coahuila,San Pedro de las Colinas",
    "Colima,Tecoman",
    "Durango,Lerdo",
    "Durango,Santiago Papasquiaro",
    "Durango,Vicente Guerrero",
    "Edo. De México,San Mateo Atenco",
    "Edo. De México,Tenancingo",
    "Edo. De México,Tianguistenco",
    "Guanajuato,Acámbaro",
    "Guanajuato,Apaseo el Alto",
    "Guanajuato,Cortázar",
    "Guanajuato,Dolores Hidalgo",
    "Guanajuato,Pénjamo",
    "Guanajuato,Salvatierra",
    "Guanajuato,San Francisco del Rincón",
    "Guanajuato,San Luis de la Paz",
    "Guanajuato,San Miguel de Allende",
    "Guanajuato,Silao",
    "Guanajuato,Uriangato",
    "Guanajuato,Valle de Santiago",
    "Guanajuato,Yuriria",
    "Guerrero,Taxco",
    "Hidalgo,Actopan",
    "Hidalgo,Cd. Sahagún",
    "Hidalgo,Ixmiquilpan",
    "Hidalgo,Mineral de la Reforma",
    "Hidalgo,Progreso de Obregón",
    "Michoacán,Cd. Hidalgo",
    "Michoacán,Pátzcuaro",
    "Michoacán,Zacapú",
    "Michoacán,Zitácuaro",
    "Michoacán - Sur,Sahuayo Michoacán",
    "Morelos,Jojutla",
    "Morelos,Yautepec",
    "Nayarit,Ixtlán del Río",
    "Nayarit,Santiago Ixcuintla",
    "Oaxaca,Huajuapan de león",
    "Oaxaca,Juchitán",
    "Oaxaca,Matias Romero Avedano",
    "Oaxaca,San Pedro Mixtepec",
    "Oaxaca,Santiago Pinotepa",
    "Puebla,Atlixco",
    "Puebla,Cd. Izúcar de Matamoros",
    "Puebla,Tecamachalco",
    "Puebla,Teziutlán",
    "Querétaro,Tequisquiapan",
    "San Luis Potosí,Ébano",
    "Sinaloa,El Dorado",
    "Sinaloa,Navolato",
    "Sonora,Agua Prieta",
    "Sonora,Agua Prieta",
    "Sonora,Cananea",
    "Sonora,Heroica Caborca",
    "Sonora,Magdalena de Kino",
    "Sonora,Puerto Peñasco",
    "Sonora,San Luis Río Colorado",
    "Sonora,San Luis Río Colorado",
    "Sonora,San Luis Río Colorado",
    "Sonora,Santa Ana",
    "Sonora,Sonoyta",
    "Tabasco,Macuspana",
    "Tabasco,Teapa",
    "Tamaulipas,Cd. Mante",
    "Tamaulipas,Miguel Alemán",
    "Tamaulipas,Río Bravo",
    "Tamaulipas,Valle Hermoso",
    "Veracruz,Acayucan",
    "Veracruz,Agua Dulce",
    "Veracruz,Cardel",
    "Veracruz,Huauchinango",
    "Veracruz,Huejutla",
    "Veracruz,Jáltipan",
    "Veracruz,Mtz de la Torre",
    "Veracruz,Panuco",
    "Veracruz,San Andrés Tuxtla",
    "Veracruz,San Bautista Tuxtepec",
    "Veracruz,Tantoyuca",
    "Veracruz,Tulancingo",
    "Veracruz,Villa Cazones",
    "Yucatán,Champotón",
    "Zacatecas,Calera",
    "Zacatecas,Guadalupe",
    "Zacatecas,Jerez",
    "Zacatecas,Rio Grande",
    "CDMX,Venustiano Carranza",
    "CDMX,Benito Juárez",
    "CDMX,Coyoacán",
    "CDMX,Iztacalco",
    "CDMX,Álvaro Obregón",
    "CDMX,Azcapotzalco"
];

}
