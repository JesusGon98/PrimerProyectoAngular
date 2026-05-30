import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; 
import IUserRecordResponse from '../../interfaces/user/user-record-response.interface';
import IUserListResponse from '../../interfaces/user/user-list-response.interface';
import IUser from '../../interfaces/user/user.interface';

@Injectable({
  providedIn: 'root',
})
//Jesus Ramiro Gonzalez Rivas - 2023-11-28
export class UserService {
  constructor(private httpclient: HttpClient) {}
  private apiUrl: string = '${environment.apiUrl}/collections/users/records';

  public find(userId: string): Observable<IUserRecordResponse> {
    const headers = new HttpHeaders({'x-api-key': environment.apiKey});
    return this.httpclient.get<IUserRecordResponse>(`${this.apiUrl}/${userId}`, { headers });
  }
  public get(): Observable<IUserListResponse> {
    return this.httpclient.get<IUserListResponse>(this.apiUrl);
  }
  public create(user: IUser): Observable<IUserRecordResponse> {
    return this.httpclient.post<IUserRecordResponse>(this.apiUrl, user);
  }
  public update(userId: string, user: IUser): Observable<IUserRecordResponse> {
    return this.httpclient.put<IUserRecordResponse>(`${this.apiUrl}/${userId}`, user);
  }
  public delete(userId: string): Observable<IUserRecordResponse> {
    return this.httpclient.delete<IUserRecordResponse>(`${this.apiUrl}/${userId}`);
  }
}
