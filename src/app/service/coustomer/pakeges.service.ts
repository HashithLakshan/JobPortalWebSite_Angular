import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PakegesService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/';


  savePakeges(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}pakeges/savePakeges`, payload);
  }

  getpakeges(profileID: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}pakeges/getPakegesByPhotographerActivePakeges/${profileID}`);
  }

  updatepakeges(payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}pakeges/updatePakeges`, payload);
  }

  deletepakeges(pakegeCode: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}pakeges/updateUser/InactiveDelete/${pakegeCode}`,null);
  }

}



