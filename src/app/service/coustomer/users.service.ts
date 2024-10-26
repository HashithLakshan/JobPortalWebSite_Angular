import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/';

  getAllUsers():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/getAllUser`);
  }

  registerUsers(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}user/saveUser`, payload);
  }

  updateUser(payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}user/updateUser`, payload);
  }

  getData(userName: string): Observable<any> {
    const formData = new FormData();
    formData.append("userName", "Chris");
        return this.http.get<any>(`${this.apiUrl}user/getUserName/${userName}`);
      }

      uploadImage(payload: any): Observable<any> {
        const formData: FormData = new FormData();
    formData.append('image1', payload.image1); 
    formData.append('userID', payload.userID);
            return this.http.post<any>(`${this.apiUrl}user/uploadImages`, formData);
          }

          deleteUser(userID: any): Observable<any> {
            return this.http.put<any>(`${this.apiUrl}user/updateUser/permenatDelete/${userID}`,null);
          }
          
  }
    
 

