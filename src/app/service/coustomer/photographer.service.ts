import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photographer } from 'src/app/shared/photographer';

@Injectable({
  providedIn: 'root'
})
export class PhotographerService {
  private apiUrl = 'http://localhost:8080/api/';
  
  constructor(private http: HttpClient) { }

  getAllPhotographers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}photographer/getAllPhotographersActive`);
  }

  registerPhotographer(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}photographer/savePhotographers`, payload);
  }
  // getPaymentList(fromDate, toDate, vendor, x){
  //   const formData: FormData = new FormData();
  //   formData.append('from_date', fromDate);
  //   formData.append('to_date ', toDate);
  //   formData.append('vendor ', vendor);
  //   formData.append('type ', x);
  
  //   // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem('jwtToken'));
  //   return this.httpClient.post<any>(this.SERVER + 'payment/getWithdrawalPaymentList', formData);
  // }


  deletePhotographer(photographerID: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}photographer/updatePhotographer/permenatDelete/${photographerID}`,null);
  }
  

}