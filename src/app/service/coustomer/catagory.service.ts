import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {


  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/';

  getAllCatogory():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}catagory/getCatogoryAll`);
  }


}
