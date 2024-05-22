import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarLoginComponent } from './components/nav-bar-login/nav-bar-login.component';
import { VistaAdminComponent } from './components/vista-admin/vista-admin.component';
import { VistaRecomendacionComponent } from './components/vista-recomendacion/vista-recomendacion.component';
import { GenreComponent } from './components/genre/genre.component';
import { ActorComponent } from './components/actor/actor.component';
import { DirectorComponent } from './components/director/director.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NavBarLoginComponent,
    VistaAdminComponent,
    VistaRecomendacionComponent,
    GenreComponent,
    ActorComponent,
    DirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
