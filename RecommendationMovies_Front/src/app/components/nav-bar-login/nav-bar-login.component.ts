import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Models/user';
import { LoginRestService } from 'src/app/services/login-rest.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.css']
})
export class NavBarLoginComponent {

  user: UserModel 
  // Objeto para logearse en la app
  dataLogin = {
    username: "",
    password: ""
  }

  selectedGenres: string[] = [];
  genres: Array<any> = [
    { name: 'Horror', value: 'Horror' },
    { name: 'Comedy', value: 'Comedy' },
    { name: 'Sci-Fi', value: 'Sci-Fi' },
    { name: 'Drama', value: 'Drama' },
    { name: 'Action', value: 'Action' }
  ];

  constructor(
    private loginRest: LoginRestService,
    private router: Router
  ){
    this.user = new UserModel ("","","","","", this.selectedGenres)
  }

  ngOnInit(): void {
    
  }

  onCheckboxChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const genre = inputElement.value;
    const isChecked = inputElement.checked;

    if (isChecked) {
      this.selectedGenres.push(genre);
    } else {
      const index = this.selectedGenres.indexOf(genre);
      if (index > -1) {
        this.selectedGenres.splice(index, 1);
      }
    }
  }

  onSubmit(form: NgForm) {
    const formData = {
      ...form.value,
      genres: this.selectedGenres
    };
  }

  // Método para logearse
  login(){
    this.loginRest.login(this.dataLogin).subscribe({
      next: (res: any) => {
        localStorage.setItem("userLoged", JSON.stringify(res.userFound))
        if (res.userFound.username == "ADMIN"){
          this.router.navigateByUrl("/vistaAdmin")
        }else{
          this.router.navigateByUrl("/recomendaciones")
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

  //Método para registrarse
  register(){
    this.loginRest.register(this.user).subscribe({
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
