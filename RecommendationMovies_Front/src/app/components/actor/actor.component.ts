import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRestService } from 'src/app/services/login-rest.service';
import { RecommendationServiceService } from 'src/app/services/recommendation-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  user: any;
  // Todas las peliculas
  moviesActor: any[] = [];

  constructor(
    private recommendationService: RecommendationServiceService,
    private loginRest: LoginRestService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.funcRecommendationActor()
  }

  backToMain(){
    this.router.navigateByUrl("/recomendaciones")
  }

  funcRecommendationActor() {
    this.recommendationService.funcRecommendationActor(this.loginRest.getUser()).subscribe({
      next: (res: any) => {        
        this.moviesActor = res.peliculasUnicas
        
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
