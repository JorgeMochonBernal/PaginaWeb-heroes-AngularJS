import { Routes } from '@angular/router';
import { HomeComponent } from './../componentes /home/home.component';
import { HeroesComponent } from './../componentes /heroes/heroes.component';
import { BuscadorComponent } from './../componentes /buscador/buscador.component';
import { HeroeComponent } from './../componentes /heroe/heroe.component';
import { AboutComponent } from './../componentes /about/about.component';

	export const ROUTES_HEROES:Routes = 
		[
			{path: 'home', component: HomeComponent },
			{ path:'heroes', component: HeroesComponent },
			{ path: 'about', component: AboutComponent },
			{ path:'buscador/:termino', component: BuscadorComponent },
			{ path: 'heroe/:id', component:HeroeComponent },			
			{ path: '**', pathMatch:'full', redirectTo: 'home'},
		];
		
