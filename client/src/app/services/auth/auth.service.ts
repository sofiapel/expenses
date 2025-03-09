import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;
  constructor(private http: HttpClient) { 
    this.baseUrl = `${environment.apiUrl}/auth`
  }

  login(body: any)
  {
    return this.http.post(`${this.baseUrl}/login`, body)
  }
  register(body: any)
  {
    return this.http.post(`${this.baseUrl}/register`, body)
  }

  saveLocalStorage(key:string, value: any){
    localStorage.setItem(key, value);
  }


}
