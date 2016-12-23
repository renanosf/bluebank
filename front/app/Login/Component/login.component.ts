import { Component } from '@angular/core';

@Component({
	selector: 'login',
	template: `
		<h1>Hello {{name}}</h1>
	`,
})
export class LoginComponent  { name = 'Angular 5'; }
