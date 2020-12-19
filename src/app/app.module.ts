import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { ROUTES_HEROES } from './rutas /heroes.routes';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

//Servicios
import {  HeroesServices } from './servicios/heroes.services';

//Compponentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes /about/about.component';
import { BuscadorComponent } from './componentes /buscador/buscador.component';
import { HeroeComponent } from './componentes /heroe/heroe.component';
import { HeroeTarjetaComponent } from './componentes /heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './componentes /heroes/heroes.component';
import { HomeComponent } from './componentes /home/home.component';
import { NavbarComponent } from './componentes /shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuscadorComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
    RouterModule.forRoot(ROUTES_HEROES, { useHash:true })
  ],
  providers: [
   HeroesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
