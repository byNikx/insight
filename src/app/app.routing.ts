import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimelineComponent, CategorySelectionDialog } from './components/timeline/timeline.component';
import { TransactionViewComponent } from './components/transaction/transaction-view/transaction-view.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component: TimelineComponent },
	{ path: 'transaction/:id', component: TransactionViewComponent},
	{
		path: '**', redirectTo:'home'
	}
];

@NgModule({
	imports:[
		RouterModule.forRoot(APP_ROUTES, {
			enableTracing: true
		})
	],
	exports: [
	    RouterModule
	  ]
})

export class AppRouting{
	
	constructor() {}
}