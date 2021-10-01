import { SingUp } from './../interfaces/sing-up';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data:Login){
    return this.http.post(`${environment.baseUrl}/users/login` , data);
  }

  SingUp(data:SingUp){
    return this.http.post(`${environment.baseUrl}/users/singUp` , data);
  }

}
