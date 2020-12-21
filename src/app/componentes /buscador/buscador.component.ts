import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from './../../servicios/heroes.services';

	@Component({
	  selector: 'app-buscador',
	  templateUrl: './buscador.component.html',
	  styleUrls: ['./buscador.component.css']
	})

	export class BuscadorComponent implements OnInit {

		heroes:any = []
  		heroe:string;

		constructor( private _activatedRoute:ActivatedRoute,
              		 private _heroesService: HeroesServices) { }

		ngOnInit(): void {
			this._activatedRoute.params.subscribe( params =>{
			      this.termino =params['termino'];
			      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
			      console.log( this.heroes );
			    });
		}

	}
