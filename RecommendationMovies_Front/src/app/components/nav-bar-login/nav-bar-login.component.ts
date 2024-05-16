import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRestService } from 'src/app/services/login-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.css']
})
export class NavBarLoginComponent {

  // Objeto para logearse en la app
  dataLogin = {
    username: "",
    password: ""
  }

  constructor(
    private loginRest: LoginRestService,
    private router: Router
  ){}

  ngOnInit(): void {
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


}
