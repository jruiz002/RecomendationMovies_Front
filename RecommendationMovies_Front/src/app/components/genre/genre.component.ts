import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRestService } from 'src/app/services/login-rest.service';
import { RecommendationServiceService } from 'src/app/services/recommendation-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {
  user: any;
  // Todas la peliculas
  moviesGenre: any[] = [];

  constructor(
    private recommendationService: RecommendationServiceService,
    private loginRest: LoginRestService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.funcRecommendationGenre()
  }

  backToMain(){
    this.router.navigateByUrl("/recomendaciones")
  }

  funcRecommendationGenre() {
    this.recommendationService.funcRecommendationGenre(this.loginRest.getUser()).subscribe({
      next: (res: any) => {        
        this.moviesGenre = res.peliculasUnicas    
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
