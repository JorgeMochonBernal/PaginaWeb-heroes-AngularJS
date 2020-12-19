import { Routes } from '@angular/router';

	export const ROUTES_HEROES:Routes = 
		[
			{ path: '**', pathMatch:'full', redirectTo: ''},
		];
		
