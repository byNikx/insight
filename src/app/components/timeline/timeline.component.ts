import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'bd-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

	changeCategory(){
		this.dialog.open(CategorySelectionDialog, {
			width: '600px'
		});
	}

  ngOnInit() {
  }

  transactions = [
	{
		"desc": "Pizza Hut",
		"category": {
			"label": "Fast Food",
			"id": 1
		},
		"date": "17-07-2017",
		"amount": 1293,
		"comment": null,
		"isCategorized": true
	},{
		"desc": "City of London",
		"category": {
			"label": "Taxis & Public Transportation",
			"id": 2
		},
		"date": "16-07-2017",
		"amount": 232,
		"comment": null,
		"isCategorized": true
	},{
		"desc": "Corner Shop",
		"category": {
			"label": "Groceries",
			"id": 3
		},
		"date": "15-07-2017",
		"amount": 92,
		"comment": "This transaction needs your attention.",
		"isCategorized": false
	},{
		"desc": "Waitrose",
		"category": {
			"label": "Groceries",
			"id": 3
		},
		"date": "14-07-2017",
		"amount": 193,
		"comment": null,
		"isCategorized": true
	},{
		"desc": "Texaco",
		"category": {
			"label": "Gas & Fuel",
			"id": 4
		},
		"date": "14-07-2017",
		"amount": 893,
		"comment": null,
		"isCategorized": true
	}
];

}

@Component({
	templateUrl: 'category-selection-dialog.html'
})

export class CategorySelectionDialog {

}