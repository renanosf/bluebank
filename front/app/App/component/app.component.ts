import { Component, OnInit } from '@angular/core';
import { ContaService } from "../../Services/conta-service";
import { Router } from "@angular/router";

@Component({
	selector: 'my-app',
	templateUrl: './app/App/template/app.html',
	providers: [ContaService]
})
export class AppComponent  implements OnInit{

	constructor(private contaService: ContaService, private router: Router){}

	ngOnInit() {
	}

	logout() {
		this.contaService.logout();
	}
}
