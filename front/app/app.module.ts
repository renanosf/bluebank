import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './Login/component/login.component';
import { PainelComponent }  from './Painel/component/painel.component';
import { AppRoutingModule } from './Routes/app-routing.module';

@NgModule({
	imports: [ 
  		BrowserModule,
  		AppRoutingModule
	],
	declarations: [
		AppComponent,
		LoginComponent,
		PainelComponent
	],
  	bootstrap:    [ AppComponent ]
})
export class AppModule { }
