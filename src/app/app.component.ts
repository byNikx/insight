import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  links = [
  	{
  		label: 'Home',
  		icon: 'home',
  		url: 'home'
  	},{
  		label: 'Transactions',
  		icon: 'list',
  		url: 'transactions'
  	},{
  		label: 'Budget',
  		icon: 'monetization_on',
  		url: 'budget'
  	},{
  		label: 'Life Goals',
  		icon: 'grade',
  		url: 'life-goals'
  	}
  ]

  settings = [
  	{
  		label: 'Account',
  		icon: 'account_box',
  		url: 'settings/account'
  	},{
  		label: 'Payee List',
  		icon: 'list',
  		url: 'payee-list'
  	}
  ]
}
