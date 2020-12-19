import { Component, OnInit } from '@angular/core';
import { HeroesServices } from './../../servicios/heroes.services';

	@Component({
	  selector: 'app-heroes',
	  templateUrl: './heroes.component.html',
	  styleUrls: ['./heroes.component.css']
	})
	export class HeroesComponent implements OnInit {

		heroes:any[] = [];

		constructor( private _heroesServices:HeroesServices ) { 
			this.heroes = this._heroesServices.getHeroe();
		}

		ngOnInit(): void {
		}

	}
