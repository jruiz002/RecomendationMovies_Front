import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { GenreModel } from 'src/app/Models/genre';
import { ActorModel } from 'src/app/Models/actor';
import { DirectorModel } from 'src/app/Models/director';
import { MovieModel } from 'src/app/Models/movie';
import { FunctionAdminService } from 'src/app/services/function-admin.service';


@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent {
  genre: GenreModel
  actor: ActorModel
  director: DirectorModel
  movie: MovieModel
  actors: any[] = []
  directors: any[] = []
  genres: any[] = []
  movies: any[] = []


  constructor(
    private adminRest: FunctionAdminService,
    private router: Router

  ){
    this.genre = new GenreModel ("", "", "")
    this.actor = new ActorModel ("","","");
    this.director = new DirectorModel ("","", "")
    this.movie = new MovieModel ("","","","")
  }

  
  ngOnInit(): void {
    this.getActors();
    this.getDirectors();  
    this.getGenres();
    this.getMovies()
  }

  dataMovieDirector = {
    title: "",
    director: ""
  }

  isFormValidMD(): boolean {
    return this.dataMovieDirector.director !== '' && this.dataMovieDirector.title !== '';
  }

  resetFormMD() {
    this.dataMovieDirector = { director: '', title: '' };
  }

  relationMovieDirector(){
    this.adminRest.relationMovieDirector(this.dataMovieDirector).subscribe({
      
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
        });
        this.resetFormMD();
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

  dataMovieActor = {
    title: "",
    actor: ""
  }

  isFormValidMA(): boolean {
    return this.dataMovieActor.actor !== '' && this.dataMovieActor.title !== '';
  }
  resetFormMA() {
    this.dataMovieActor = { actor: '', title: '' };
  }
  

  relationMovieActor(){
    this.adminRest.relationMovieActor(this.dataMovieActor).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
        });
        this.resetFormMA();
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

  dataMovieGenre = {
    title: "",
    genre: ""
  }

  isFormValidMG(): boolean {
    return this.dataMovieGenre.genre !== '' && this.dataMovieGenre.title !== '';
  }
  resetFormMG() {
    this.dataMovieGenre = { genre: '', title: '' };
  }

  relationMovieGenre(){
    this.adminRest.relationMovieGenre(this.dataMovieGenre).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
        });
        this.resetFormMG();
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

  getMovies(){
    this.adminRest.getMovies().subscribe({
      next: (res: any) => {
        this.movies = res.movies
        
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

  getGenres(){
    this.adminRest.getGenres().subscribe({
      next: (res: any) => {
        this.genres = res.genres
        
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

  getDirectors(){
    this.adminRest.getDirectos().subscribe({
      next: (res: any) => {
        this.directors = res.directors
        
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

  getActors(){
    this.adminRest.getActors().subscribe({
      next: (res: any) => {
        this.actors = res.actors
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

  createGenre(){
    this.adminRest.createGenre(this.genre).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
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

  createActor(){
    this.adminRest.createActor(this.actor).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
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

  createDirector(){
    this.adminRest.createDirector(this.director).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
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

  createMovie(){
    this.adminRest.createMovie(this.movie).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false
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
