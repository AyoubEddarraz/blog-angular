import { Token } from './../interfaces/token';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  set(data:any){
    localStorage.setItem("token" , data.token);
    localStorage.setItem("uid" , data.uid);
  }

  handleToken(data:any){
    this.set(data);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getUID(){
    return localStorage.getItem("uid");
  }

  removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
  }

  decodeToken(payload:any){
    return JSON.parse(atob(payload))
  }

  payload(token:String) {
    const payload = token.split(".")[1];
    return this.decodeToken(payload);
  }

  isValid() {
    const token = this.getToken();
    const uid    = this.getUID();

    if(token) {
      const payload = this.payload(token);
      if(payload){
        return uid == payload.UID;
      };
    }
    return false;
  }

  getInfos() {
    const token = this.getToken();

    if(token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }
    return null;
  }

  loggedIn(){
    return this.isValid();
  }



}
