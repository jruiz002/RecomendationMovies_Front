import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserModel } from 'src/app/Models/user';
import { LoginRestService } from 'src/app/services/login-rest.service';
import { RecommendationServiceService } from 'src/app/services/recommendation-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-recomendacion',
  templateUrl: './vista-recomendacion.component.html',
  styleUrls: ['./vista-recomendacion.component.css']
})
export class VistaRecomendacionComponent {
  user: any;
  moviesGenre: any[] = [];
  moviesActor: any[] = [];
  moviesDirector: any[] = [];

  constructor(
    private recommendationService: RecommendationServiceService,
    private loginRest: LoginRestService
  ) {

  }

  ngOnInit(): void {
    this.funcRecommendationGenre()  
    this.funcRecommendationActor()
    this.funcRecommendationDirector()
  }

  funcRecommendationGenre() {
    this.recommendationService.funcRecommendationGenre(this.loginRest.getUser()).subscribe({
      next: (res: any) => {        
        this.moviesGenre = res.peliculasUnicas
        console.log(this.moviesGenre);
        
      },
      error: (err) => {
        Swal.fire({
          title: err.error.message || err.error,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  }

  funcRecommendationActor() {
    this.recommendationService.funcRecommendationActor(this.loginRest.getUser()).subscribe({
      next: (res: any) => {        
        this.moviesActor = res.peliculasUnicas
        console.log(this.moviesActor);
      },
      error: (err) => {
        Swal.fire({
          title: err.error.message || err.error,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  }

  funcRecommendationDirector() {
    this.recommendationService.funcRecommendationDirector(this.loginRest.getUser()).subscribe({
      next: (res: any) => {        
        this.moviesDirector = res.peliculasUnicas
        console.log(this.moviesDirector);
        
      },
      error: (err) => {
        Swal.fire({
          title: err.error.message || err.error,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  }

  data = {
    username: this.loginRest.getUser().username,
    title: ""
  }

  catchData(title: any){
    this.data.title = title
  }

  funcWatched(){
    this.recommendationService.funcWatched(this.data).subscribe({
      next: (res: any) => {        
        Swal.fire({
          title: res.message,
          icon: 'success',
          timer: 2000
        });
      },
      error: (err) => {
        Swal.fire({
          title: err.error.message || err.error,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  }



}
