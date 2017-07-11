import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public line_ChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]];

    public line_ChartOptions = {
        title: 'Company Performance',
        curveType: 'function',
        legend: {
            position: 'bottom'
        }
    };


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
