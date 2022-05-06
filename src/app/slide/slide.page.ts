import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  slidsextend=[
   {
     title:'Bienvenido a Xtend',
     subtitle:'Chambear y ganar una lana extra será más rápido, sencillo y seguro',
     img:'icon/extend-for-back-dark.svg',
     btn:0,
   },
   {
    title:'Regístrate y elige tu misíon',
    subtitle:'',
    img:'img/imagenes_swipes-01.png',
    btn:0,
  },
  {
    title:'Completa tu visita',
    subtitle:'',
    img:'img/imagenes_swipes-02.png',
    btn:0,
  },
  {
    title:'Cobra tu lana y sigue eligiendo nuevas misiones',
    subtitle:'',
    img:'img/imagenes_swipes-03.png',
    btn:1,
  },
  ];

  constructor(private router: Router,) { }

  ngOnInit() {
  }
  login(i: number){
    console.log("Soy un slide")
    if(i==3){
    this.router.navigate(['login']);
    localStorage.setItem('new','1');
    }
  }

}
