import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; 
import IloginResponse from '../../interfaces/auth/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}
  private apiUrl: string = environment.apiUrl;

  public login(credentials: { email: string; password: string }) {
    const headers = new HttpHeaders({'x-api-key': environment.apiKey});
    const body =  credentials;
    return this.http.post<IloginResponse>(`${this.apiUrl}/login`, body, { headers });
  }
}
