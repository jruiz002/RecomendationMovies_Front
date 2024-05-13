import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {VistaAdminComponent} from './components/vista-admin/vista-admin.component'
import {VistaRecomendacionComponent} from './components/vista-recomendacion/vista-recomendacion.component'

const routes: Routes = [
    //GENERAL
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
