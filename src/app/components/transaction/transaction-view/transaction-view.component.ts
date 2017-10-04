import { Component, OnInit,  } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/operator/switchMap';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';





const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


@Component({
  selector: 'bd-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {
	transactionId: any;
	displayedColumns = ['userId', 'userName', 'progress', 'color'];
  	database = new Database();
  dataSource: MockDataService | null;

	constructor(
		private route: ActivatedRoute		
	) { }

	ngOnInit() {
		this.route.paramMap
		.switchMap((params: ParamMap) => params.get('id'))
		.subscribe(id => this.transactionId = id);

		this.dataSource = new MockDataService(this.database);
	}

}

export interface Data{
	id: string;
	currentMonth: string;
	average: string;
	total: string;
}

export class Database {

	dataChange: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);

	get data(): Data[]{
		return this.dataChange.getValue();
	}
	
	constructor() {
		for (let i = 0; i < 2; i++) { this.addUser(); }
	}

	addUser(): void{
		let copiedData = this.data.slice();
		copiedData.push(this.createNewUser());
		this.dataChange.next(copiedData);
	}

	private createNewUser() {
	    const name =
	        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
	        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

	    return {
	      id: (this.data.length + 1).toString(),
	      currentMonth: name,
	      average: Math.round(Math.random() * 100).toString(),
	      total: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
	    };
	}
}

export class MockDataService extends DataSource<any> {
	
	constructor(private _database: Database) {
		super();
	}

	connect(): Observable<Data[]>{
		return this._database.dataChange;
	}

	disconnect(){}
}