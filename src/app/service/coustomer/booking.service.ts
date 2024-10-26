import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/';


  CreateBookings(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}bookings/saveBookings`, payload);
  }

  getBookingByPhotographerActiveUsers(PhotographerId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}bookings/getBookingByPhotographerActiveUsers/${PhotographerId}`);
  }
  getBookingByUsersName(userName:any,photographerID :any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}bookings/getBookingByUser/${userName}/${photographerID}`);
  }

  getBookingByUserId(userID:any,photographerID:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}bookings/getBookingByUserId/${userID}/${photographerID}`);
  }

  updateBooking(payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}bookings/updateBookings`, payload);
  }

  deleteBooking(bookId: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}bookings/DeleteBookings/${bookId}`,null);
  }

}
