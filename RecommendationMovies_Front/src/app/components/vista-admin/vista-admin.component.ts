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
