import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormBuilder, FormGroup} from '@angular/forms';
import { StorageHelperService } from 'src/app/xservices/storage/storage-helper.service';



@Component({
  selector: 'app-popover-filtermap',
  templateUrl: './popover-filtermap.component.html',
  styleUrls: ['./popover-filtermap.component.scss'],
})
export class PopoverFiltermapComponent implements OnInit {
  filterMap: FormGroup;

  constructor(private fb: FormBuilder,
              private storage: StorageHelperService,) {
    this.filterMap = fb.group({
      promotoria: false,
      demostradores: false,
      mistery: false,
      anaquelista: false,
    });
   }

   selected:string[]=[];

  ngOnInit() {}

  filter(){

    const formvalues = this.filterMap.value;
    const promotoria = formvalues.promotoria;
    const  demostradores = formvalues.demostradores;
    const  mistery = formvalues.mistery;
    const  anaquelista = formvalues.anaquelista;
    console.log(promotoria );
    console.log(demostradores);
    console.log(mistery);
    console.log(anaquelista);
    
    try{
     if(promotoria){
           this.selected.push('skybluextend');
     }else{
           this.selected.forEach((element,index)=>{
              if(element=='skybluextend') {this.selected.splice(index,1)};
           });
           this.storage.setObject('filter-map',this.selected);
     }
     if(demostradores){
            this.selected.push('purplextend');
     }else{

            this.selected.forEach((element,index)=>{
                if(element=='purplextend') {this.selected.splice(index,1)};
            });
            this.storage.setObject('filter-map',this.selected);
     }
     if(mistery){
           this.selected.push('navybluextend');
     }else{
          this.selected.forEach((element,index)=>{
              if(element=='navybluextend') {this.selected.splice(index,1)};
          });
         this.storage.setObject('filter-map',this.selected);
     }
     if(anaquelista){
      this.selected.push('purplextend');
     }else{

        this.selected.forEach((element,index)=>{
              if(element=='purplextend') {this.selected.splice(index,1)};
         });
       this.storage.setObject('filter-map',this.selected);
     }


     
      
      this.selected = this.selected.filter((n, i) => this.selected.indexOf(n) === i);
      console.log(this.selected);
     // localStorage.setItem("my_colors", JSON.stringify(this.selected));
      this.storage.setObject('filter-map',this.selected);
      window.location.reload();
     }catch(e){
       alert(e);
     }

  }

}
