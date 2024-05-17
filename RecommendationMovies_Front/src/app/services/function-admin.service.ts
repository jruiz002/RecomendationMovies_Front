import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunctionAdminService {

  htppOptions = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  createGenre(params: {}){
    return this.http.post(environment.baseUri + "genre/createGenre", params, {headers: this.htppOptions} )
  }

  createMovie(params: {}){
    return this.http.post(environment.baseUri + "movie/addMovie", params, {headers: this.htppOptions} )
  }

  createDirector(params: {}){
    return this.http.post(environment.baseUri + "director/createDirector", params, {headers: this.htppOptions} )
  }

  createActor(params: {}){
    return this.http.post(environment.baseUri + "actor/createActor", params, {headers: this.htppOptions} )
  }



  






}
