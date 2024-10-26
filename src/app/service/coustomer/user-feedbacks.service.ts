import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbacksService {

  private apiUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  saveUserFeedbacks(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}userFeedbacks/saveUsersFeedbacks`, payload);
  }

  
  getAllUserFeedbacks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}userFeedbacks/getAllUsersFeedbacksActives`);
  }



}
