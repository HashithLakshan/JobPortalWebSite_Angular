import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {


  constructor(private _http:HttpClient) { }

  getAllCatagery():Observable<any> {
    return this._http.get('http://localhost:8080/getAllCatagories');
  }





}
