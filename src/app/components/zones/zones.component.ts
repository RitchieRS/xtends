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
  cities: number[] = [];
  option:string;
  optionsSend: any;
  selected:string[][]=[];
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
        console.log(storedzone[val]);
        this.selected.push(storedzone[val]);
      });
    });

    this.storage.getObject('zone').then((zones: any) => {
      Object.keys(zones).forEach(val => {
       // console.log(zones);
        this.options.push(zones[val].idCiudad+"-"+zones[val].ciudad+","+zones[val].estado);
      });
     
    });
  }

  async delete(str){
    console.log("delete")
    this.selected.forEach((element,index)=>{
      console.log(element)
      if(element==str) {this.selected.splice(index,1)};
   });
   this.storage.setObject('zone-stored',this.selected);

   this.storage.getObject('zone-stored').then((storedzone: any) => {
    Object.keys(storedzone).forEach(val => {
    // console.log(storedzone[val].split("-").shift());
     this.cities.push(parseInt(storedzone[val].split("-").shift()))

     //this.selected.push(storedzone[val]);
   });
 });

 let cities = {
  "ciudades":this.cities
 }
   
   
   const token = localStorage.getItem('token');

   await this.srvInf.updateInteresZones(cities,token).subscribe((res)=>{
        console.log(res);
   })
  
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
    this.myControl.reset();
    this.selected = this.selected.filter((n, i) => this.selected.indexOf(n) === i);
   // localStorage.setItem("my_colors", JSON.stringify(this.selected));
    this.storage.setObject('zone-stored',this.selected);
    this.resetSearch();
   }catch(e){
     alert(e);
   }
    //this.myControl.reset();
    //console.dir(this.selected);
  }

 async resetSearch(){
  this.cities=[];
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

 await this.storage.getObject('zone-stored').then((storedzone: any) => {
      Object.keys(storedzone).forEach(val => {
      // console.log(storedzone[val].split("-").shift());
       this.cities.push(parseInt(storedzone[val].split("-").shift()))


       //this.selected.push(storedzone[val]);
     });
     let cities = {
      "ciudades":this.cities
     }
  
     const token = localStorage.getItem('token');
  
     this.srvInf.updateInteresZones(cities,token).subscribe((res)=>{
          console.log(res);
     })
   });

   

     /*let storedCities = JSON.parse(localStorage.getItem("my_colors"));
     this.selected = storedCities;*/

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


  ciudades = [
    "Tenancingo,Edo. De M??xico",
    "Calvillo,Aguascalientes",
    "LoretoBaja California Norte",
    "Baja California Norte,San Felipe",
    "Baja California Norte,Tecate",
    "Baja California Norte,Tecate",
    "Baja California Sur,Comond??",
    "Baja California Sur,El Vizca??no",
    "Chiapas,Cintalapa de Figueroa",
    "Chiapas,Huixtla",
    "Chiapas,Palenque",
    "Chiapas,Tonal??",
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
    "Edo. De M??xico,San Mateo Atenco",
    "Edo. De M??xico,Tenancingo",
    "Edo. De M??xico,Tianguistenco",
    "Guanajuato,Ac??mbaro",
    "Guanajuato,Apaseo el Alto",
    "Guanajuato,Cort??zar",
    "Guanajuato,Dolores Hidalgo",
    "Guanajuato,P??njamo",
    "Guanajuato,Salvatierra",
    "Guanajuato,San Francisco del Rinc??n",
    "Guanajuato,San Luis de la Paz",
    "Guanajuato,San Miguel de Allende",
    "Guanajuato,Silao",
    "Guanajuato,Uriangato",
    "Guanajuato,Valle de Santiago",
    "Guanajuato,Yuriria",
    "Guerrero,Taxco",
    "Hidalgo,Actopan",
    "Hidalgo,Cd. Sahag??n",
    "Hidalgo,Ixmiquilpan",
    "Hidalgo,Mineral de la Reforma",
    "Hidalgo,Progreso de Obreg??n",
    "Michoac??n,Cd. Hidalgo",
    "Michoac??n,P??tzcuaro",
    "Michoac??n,Zacap??",
    "Michoac??n,Zit??cuaro",
    "Michoac??n - Sur,Sahuayo Michoac??n",
    "Morelos,Jojutla",
    "Morelos,Yautepec",
    "Nayarit,Ixtl??n del R??o",
    "Nayarit,Santiago Ixcuintla",
    "Oaxaca,Huajuapan de le??n",
    "Oaxaca,Juchit??n",
    "Oaxaca,Matias Romero Avedano",
    "Oaxaca,San Pedro Mixtepec",
    "Oaxaca,Santiago Pinotepa",
    "Puebla,Atlixco",
    "Puebla,Cd. Iz??car de Matamoros",
    "Puebla,Tecamachalco",
    "Puebla,Teziutl??n",
    "Quer??taro,Tequisquiapan",
    "San Luis Potos??,??bano",
    "Sinaloa,El Dorado",
    "Sinaloa,Navolato",
    "Sonora,Agua Prieta",
    "Sonora,Agua Prieta",
    "Sonora,Cananea",
    "Sonora,Heroica Caborca",
    "Sonora,Magdalena de Kino",
    "Sonora,Puerto Pe??asco",
    "Sonora,San Luis R??o Colorado",
    "Sonora,San Luis R??o Colorado",
    "Sonora,San Luis R??o Colorado",
    "Sonora,Santa Ana",
    "Sonora,Sonoyta",
    "Tabasco,Macuspana",
    "Tabasco,Teapa",
    "Tamaulipas,Cd. Mante",
    "Tamaulipas,Miguel Alem??n",
    "Tamaulipas,R??o Bravo",
    "Tamaulipas,Valle Hermoso",
    "Veracruz,Acayucan",
    "Veracruz,Agua Dulce",
    "Veracruz,Cardel",
    "Veracruz,Huauchinango",
    "Veracruz,Huejutla",
    "Veracruz,J??ltipan",
    "Veracruz,Mtz de la Torre",
    "Veracruz,Panuco",
    "Veracruz,San Andr??s Tuxtla",
    "Veracruz,San Bautista Tuxtepec",
    "Veracruz,Tantoyuca",
    "Veracruz,Tulancingo",
    "Veracruz,Villa Cazones",
    "Yucat??n,Champot??n",
    "Zacatecas,Calera",
    "Zacatecas,Guadalupe",
    "Zacatecas,Jerez",
    "Zacatecas,Rio Grande",
    "CDMX,Venustiano Carranza",
    "CDMX,Benito Ju??rez",
    "CDMX,Coyoac??n",
    "CDMX,Iztacalco",
    "CDMX,??lvaro Obreg??n",
    "CDMX,Azcapotzalco"
];

}
