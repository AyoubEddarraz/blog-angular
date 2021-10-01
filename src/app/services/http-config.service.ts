import { TokenService } from './token.service';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  constructor(private token: TokenService) { }

  // add token to any http request in damende with json return
  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Authorization' : `Bearer ${this.token.getToken()}`
  })

}
