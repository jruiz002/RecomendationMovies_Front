import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {VistaAdminComponent} from './components/vista-admin/vista-admin.component'
import {VistaRecomendacionComponent} from './components/vista-recomendacion/vista-recomendacion.component'
import { GenreComponent } from './components/genre/genre.component';
import { ActorComponent } from './components/actor/actor.component';
import { DirectorComponent } from './components/director/director.component';

const routes: Routes = [
    //GENERAL
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'vistaAdmin', component: VistaAdminComponent},
    {path:"recomendaciones", component: VistaRecomendacionComponent},
    {path:"genre", component: GenreComponent},
    {path:"actor", component: ActorComponent},
    {path:"director", component: DirectorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
