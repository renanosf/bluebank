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

	criarConta() {
		console.log(this.contaNova);
		if (this.contaNova.agencia && this.contaNova.conta) {
			this.contaService.criarConta(this.contaNova)
			.then((res) => {
				alert("Conta criada com sucesso. Use o formulário ao lado para acesso");
			})
			.catch(() => {
				alert("Não foi possível criar essa conta");
			})
		} else {
			alert("Preencha os campos");
		}
	}
}
