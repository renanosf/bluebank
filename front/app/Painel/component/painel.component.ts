import { Component } from '@angular/core';

@Component({
	selector: 'painel',
	template: `
		<h1>Wii {{name}}</h1>
	`,
})
export class PainelComponent  { name = 'Angular 5'; }
