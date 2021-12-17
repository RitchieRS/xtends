import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private http: HttpClient) { }

  getItemsx() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }




}
