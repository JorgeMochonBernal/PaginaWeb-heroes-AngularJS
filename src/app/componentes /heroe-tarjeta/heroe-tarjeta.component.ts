import { Component, OnInit, Input } from '@angular/core';
import { HeroesServices } from './../../servicios/heroes.services';
import { Router } from '@angular/router';

	@Component({
	  selector: 'app-heroe-tarjeta',
	  templateUrl: './heroe-tarjeta.component.html',
	  styleUrls: ['./heroe-tarjeta.component.css']
	})

	export class HeroeTarjetaComponent implements OnInit {

		
		@Input() heroe:any = {}
		@Input() index:number;

		constructor( private _heroesServices:HeroesServices,
					 private _router:Router ) { 
			this.heroe = this._heroesServices.getHeroes();
		}

		ngOnInit(): void {
		}

		verHeroe() {
			this._router.navigate(['heroe',this.index]);
		}

	}
