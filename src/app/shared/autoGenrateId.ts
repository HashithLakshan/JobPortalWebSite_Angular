import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AutoGenrateId {

  constructor(private http:HttpClient) { }
  

  getRandomArbitrary(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  }
    
 

