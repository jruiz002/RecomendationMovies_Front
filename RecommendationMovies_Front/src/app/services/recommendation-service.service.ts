import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendationServiceService {

  htppOptions = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  funcRecommendationGenre(params: {}){
    return this.http.post(environment.baseUri + "recommendation/funcRecommendationGenre", params, {headers: this.htppOptions} )
  }

  funcRecommendationActor(params: {}){
    return this.http.post(environment.baseUri + "recommendation/funcRecommendationActor", params, {headers: this.htppOptions} )
  }

  funcRecommendationDirector(params: {}){
    return this.http.post(environment.baseUri + "recommendation/funcRecommendationDirector", params, {headers: this.htppOptions} )
  }

  funcWatched(params: {}){
    return this.http.post(environment.baseUri + "user/funcWatched", params, {headers: this.htppOptions} )
  }

}
