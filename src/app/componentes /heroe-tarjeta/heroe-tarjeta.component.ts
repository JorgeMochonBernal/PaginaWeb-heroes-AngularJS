import { Component, OnInit,Input } from '@angular/core';
import { HeroesServices } from './../../servicios/heroes.services';

	@Component({
	  selector: 'app-heroe-tarjeta',
	  templateUrl: './heroe-tarjeta.component.html',
	  styleUrls: ['./heroe-tarjeta.component.css']
	})

	export class HeroeTarjetaComponent implements OnInit {
		
		@Input() heroe:any= {};

		constructor( private _heroesServices:HeroesServices ) { 
			this.heroe = this._heroesServices.getHeroe();
			console.log(this.heroe);
		}

		ngOnInit(): void {
		}

	}
