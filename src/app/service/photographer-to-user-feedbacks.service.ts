import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhotographerToUserFeedbacksService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/';

  saveFeedbacksUTP(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}userToPhotographerFeedbacks/saveUserToPhotographerFeedbacks`, payload);
  }

  getfeedbackPhotographerActiveUsers(PhotographerId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}userToPhotographerFeedbacks/getUserToPhotographerFeedbacksActive/${PhotographerId}`);
  }


  deleteBooking(uToPFeedbackID: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}userToPhotographerFeedbacks/DeleteFeedbackUToP/${uToPFeedbackID}`,null);
  }

  getByUserNameFeedback(userName: any, photographerID: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}userToPhotographerFeedbacks/getFeedbackByUserName/${userName}/${photographerID}`);
  }
  
  getByUserIDFeedback(userID: any, photographerID: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}userToPhotographerFeedbacks/getFeedbacksByUserID/${userID}/${photographerID}`);
  }
  
  getByFeedbackPhotographerId(photographerID : any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}userToPhotographerFeedbacks/getUserToPhotographerFeedbacksActive/${photographerID}`);
  }
  getByFeedbackId(uToPFeedbackID : any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}userToPhotographerFeedbacks/getFeedBackIDDetails/${uToPFeedbackID}`);
  }

  getAllByFeedbackSatisfied(PhotographerID : any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}userToPhotographerFeedbacks/getFeedbacksAllSatisfied/${PhotographerID}`);
  }

  getByfeedbackSatisfiedUserName(userName : any, photographerID : any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}userToPhotographerFeedbacks/getFeedbackByUserNameSatisfied/${userName}/${photographerID}`);
  }

  getByfeedbackSatisfiedUserID(userID : any,photographerID : any):Observable<any>{
  return this.http.get<any>(`${this.apiUrl}userToPhotographerFeedbacks/getFeedbackByUserIDSatisfied/${userID}/${photographerID}`);
  }
}
