import { Component, OnInit, Input, Output, ElementRef, OnChanges } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

declare var google: any;
declare var isChartLoaded: boolean;
declare var packages: any;

@Component({
  selector: 'bd-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

	chart: any
	@Input('type') chartType: string;
	@Input('data') chartData: Object;
	@Input('options') chartOptions: Object;


	constructor(element: ElementRef) { 
		this.chart = element.nativeElement;
	}

	ngOnChanges(){
		this.loadChartAPI();
		this.drawChart(this.chart, this.chartData, this.chartType, this.chartOptions);
	}

	ngOnInit() {
		this.loadChartAPI();
		Observable.fromEvent(window, 'resize')
			.debounceTime(100)
			.subscribe(newValue => {
				this.drawChart(this.chart, this.chartData, this.chartType, this.chartOptions);
			});
	}

	loadChartAPI(): void{
		if(google){
			if(!isChartLoaded)
				isChartLoaded = true;
			google.charts.load('current', {'packages': ['corechart', 'gauge']['orgchart']});
		}
	}

	drawChart(chart, data, type, options): void{
		console.log('Drawing chart...');

		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
            const wrapper = new google.visualization.ChartWrapper({
                chartType: type,
                dataTable: data,
                options: options || {}
            });
            wrapper.draw(chart);
        }

	}

}
