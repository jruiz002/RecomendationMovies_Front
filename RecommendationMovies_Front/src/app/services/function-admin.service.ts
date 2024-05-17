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

  getActors(){
    return this.http.get(environment.baseUri + "actor/getActors", {headers: this.htppOptions})
  }

  getDirectos(){
    return this.http.get(environment.baseUri + "director/getDirector", {headers: this.htppOptions})
  }
  
  getGenres(){
    return this.http.get(environment.baseUri + "genre/getGenres", {headers: this.htppOptions})
  }

  getMovies(){
    return this.http.get(environment.baseUri + "movie/getMovies", {headers: this.htppOptions})
  }

  relationMovieGenre(params: {}){
    return this.http.post(environment.baseUri + "recommendation/relationMovieGenre", params, {headers: this.htppOptions} )
  }

  relationMovieActor(params: {}){
    return this.http.post(environment.baseUri + "recommendation/relationMovieActor", params, {headers: this.htppOptions} )
  }

  relationMovieDirector(params: {}){
    return this.http.post(environment.baseUri + "recommendation/relationMovieDirector", params, {headers: this.htppOptions} )
  }

}
