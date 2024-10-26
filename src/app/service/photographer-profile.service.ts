import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhotographerProfileService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/';
  

  // getAllPhotographers(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}photographer/getAllPhotographersActive`);
  // }

  registerProfiles(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}photographerProfiles/saveProfile`, payload);
  }

  uploadImgs(payload: any): Observable<any> {
    const formData: FormData = new FormData();
    // formData.append('pId', payload.pId);
    formData.append('image1', payload.image1);
    formData.append('image2', payload.image2);
    formData.append('profileID', payload.profileID);
    return this.http.post<any>(`${this.apiUrl}photographerProfiles/saveImgs`, formData);
  }

  getProfiles(PhotographerId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}bookings/getBookingByPhotographerActiveUsers/${PhotographerId}`);
  }

}
