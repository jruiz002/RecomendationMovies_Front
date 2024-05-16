import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginRestService {

  htppOptions = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  login(params: {}){
    return this.http.post(environment.baseUri + "user/login", params, {headers: this.htppOptions} )
  }

  register(params: {}){
    return this.http.post(environment.baseUri + "user/register", params, {headers: this.htppOptions} )
  }

  getUser(){
    let globalUser = localStorage.getItem("userLoged");
    let user;
    if(globalUser != undefined){
      user = JSON.parse(globalUser);
    }else{
      user = "";
    }
    return user;
  }

}
