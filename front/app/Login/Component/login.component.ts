import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from "../../Services/conta-service";

@Component({
	selector: 'login',
	templateUrl: './app/Login/template/login.html',
	providers: [ContaService]
})
export class LoginComponent implements OnInit  {

	private contaAcesso = {agencia : null, conta : null};
	private contaNova = {agencia : null, conta : null};

	constructor(private contaService: ContaService, private router: Router){}

	ngOnInit() {
		if(this.contaService.getContaInfo()){
			this.router.navigateByUrl('/painel');
		}
	}

	acessarConta() {
		if (this.contaAcesso.agencia && this.contaAcesso.conta) {
			this.contaService.acessarConta(this.contaAcesso)
			.then((res) => {
				this.router.navigateByUrl('/painel');
			})
			.catch(() => {
				alert("Não foi possível acessar essa conta");
			})
		} else {
			alert("Preencha os campos");
		}
	}
}
