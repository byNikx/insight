import { Component, OnInit, Input, Output, ElementRef, OnChanges } from '@angular/core';

declare var google: any;
declare var isMapLoaded: boolean;

@Component({
  selector: 'bd-map',
  host:{
  	'[class]':'a'
  },
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	a = 'bd-map';
	map: any;
	constructor(element: ElementRef) { 
		this.map = element.nativeElement;
	}

	ngOnInit() {
//		this.loadMapAPI();
		this.drawMap();
	}

	loadMapAPI(): void{
		if(google){
			if(!isMapLoaded)
				isMapLoaded = true;
			
		}
	}

	drawMap(){
		setTimeout(()=>{
			console.log('Drawing map...');
			var uluru = {lat: 28.4948242, lng: 77.0934929};
	        var mapq = new google.maps.Map(this.map, {
	          zoom: 18,
	          center: uluru
	        });
	        var marker = new google.maps.Marker({
	          position: uluru,
	          map: mapq
	        });	
		}, 1000);
	} 

}
