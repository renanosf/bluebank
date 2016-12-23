import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from "@angular/router";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContaService implements OnInit {

	private url = 'conta';
	private headers = new Headers({'Content-Type': 'application/json'});
	private contaInfo = JSON.parse(localStorage.getItem("contaInfo"));

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

	constructor(private http: Http, private router: Router) { }

	ngOnInit() {
		if (this.contaInfo && this.router.url === '/login') {
			this.router.navigateByUrl('/painel');
		} else if (!this.contaInfo && this.router.url === '/painel') {
			this.router.navigateByUrl('/login');
		}
	}

	logout() {
		localStorage.clear();
		this.contaInfo = null;
		this.router.navigateByUrl('/login');
	}

	acessarConta(conta) {
		return this.http
			.post(this.url + "/entraConta", JSON.stringify(conta), {headers: this.headers})
			.toPromise()
			.then( response => {
				localStorage.setItem('contaInfo', JSON.stringify(response));
				this.contaInfo = response.json();
				return response.json();
			})
			.catch( this.handleError );
	}

	criarConta(conta) {
		return this.http
			.put(this.url, JSON.stringify(conta), {headers: this.headers})
			.toPromise()
			.then( response => response.json())
			.catch( this.handleError );
	}

	getContaInfo() {
		return this.contaInfo;
	}
}