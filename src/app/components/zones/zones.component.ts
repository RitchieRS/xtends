import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { InfoService } from 'src/app/xservices/user/info.service';


@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss'],
})
export class ZonesComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  selected: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private srvInf: InfoService) { }

  ngOnInit() {
     const token = localStorage.getItem('token');
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    let storedCities = JSON.parse(localStorage.getItem("my_colors"));
    this.options = storedCities;

    this.srvInf.getCitiesInformation(token).subscribe((res)=>{
      
      Object.keys(res).forEach(val => {
        console.log(res[val]);
        this.options.push(res[val].estado+","+res[val].ciudad);
      });
      console.log(this.options);
    })
  }

  delete(str){
    console.log("delete")
    this.selected.forEach((element,index)=>{
      console.log(element)
      if(element==str) {this.selected.splice(index,1)};
   });
   localStorage.setItem("my_colors", JSON.stringify(this.selected));
   
  }

  addOption(option){
    console.log(option)
    this.selected.push(option)
    this.selected = this.selected.filter((n, i) => this.selected.indexOf(n) === i);
    localStorage.setItem("my_colors", JSON.stringify(this.selected));
    console.dir(this.selected);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

}
