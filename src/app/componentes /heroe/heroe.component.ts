import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesServices } from './../../servicios/heroes.services';
import { Router } from '@angular/router';

	@Component({
	  selector: 'app-heroe',
	  templateUrl: './heroe.component.html',
	  styleUrls: ['./heroe.component.css']
	})
	export class HeroeComponent {

		heroe:any[] = [];

		constructor( private activatedRoute: ActivatedRoute,
					 private _heroesServices:HeroesServices,
					 private _router:Router ) 
		{ 
				this.activatedRoute.params.subscribe( params => {
        			this.heroe = this._heroesServices.getHeroe(params['id'] );
        			console.log(this.heroe);
        		});
		}

		verHeroe() {
			this._router.navigate(['heroes']);
		}
	}
