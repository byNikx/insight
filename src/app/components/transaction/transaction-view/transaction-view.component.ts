import { Component, OnInit,  } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'bd-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {
	transactionId: any;
	constructor(
		private route: ActivatedRoute		
	) { }

	ngOnInit() {
		this.route.paramMap
		.switchMap((params: ParamMap) => params.get('id'))
		.subscribe(id => this.transactionId = id);
	}

}
