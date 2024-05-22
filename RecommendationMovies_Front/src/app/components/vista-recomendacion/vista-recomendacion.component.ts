import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  // Todas la peliculas
  moviesGenre: any[] = [];
  // Peliculas que se mostrarán al usuario
  moviesUserGenre: any[] = [];

  // Todas las peliculas
  moviesActor: any[] = [];
  // Peliculas que se mostrarán al usuario
  moviesUserActor: any[] = [];

  // Todas las películas
  moviesDirector: any[] = [];
  // Peliculas que se mostrarán al usuario
  moviesUserDirector: any[] = [];

  constructor(
    private recommendationService: RecommendationServiceService,
    private loginRest: LoginRestService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.funcRecommendationGenre()  
    this.funcRecommendationActor()
    this.funcRecommendationDirector()
  }

  onclickGenre(){
    this.router.navigateByUrl("/genre")
  }

  onclickActor(){
    this.router.navigateByUrl("/actor")
  }

  onclickDirector(){
    this.router.navigateByUrl("/director")
  }

  funcRecommendationGenre() {
    this.recommendationService.funcRecommendationGenre(this.loginRest.getUser()).subscribe({
      next: (res: any) => {        
        this.moviesGenre = res.peliculasUnicas    
        if (this.moviesGenre.length >= 8){
          for(let i = 0; i < 8; i++){
            this.moviesUserGenre.push(this.moviesGenre[i])
          }
        } else{
          this.moviesUserGenre = res.peliculasUnicas   
        }  
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
        
        if (this.moviesActor.length >= 8){
          for(let i = 0; i < 8; i++){
            this.moviesUserActor.push(this.moviesActor[i])
          }
        }else{
          this.moviesUserActor = res.peliculasUnicas
        }
        
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
        if (this.moviesDirector.length >= 8){
          for(let i = 0; i < 8; i++){
            this.moviesUserDirector.push(this.moviesDirector[i])
          }
          
        }else{
          this.moviesUserDirector = res.peliculasUnicas
        }
        
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
        this.ngOnInit();
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
