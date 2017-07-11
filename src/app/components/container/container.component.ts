import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

@Component({
  selector: 'bd-container',
  host: {
  	'[class]': 'activeClass'
  },
  template: `<ng-content></ng-content>`,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {

	_element: any;
	watcher: Subscription;
	activeClass: string;

	constructor(private media: ObservableMedia, element: ElementRef) {
		this._element = element.nativeElement;
	    this.watcher = media.subscribe((change: MediaChange) => {

	    	let foundChanges = this.detectChange( 
	    		BREAKPOINTS.filter((breakpoint)=>{
		  			return change.mqAlias == breakpoint;
		  		})
	    	);
	    	this.updateContainer(this._element, foundChanges);

	    });
	}

	ngOnInit() {
	  	let foundChanges = this.detectChange( 
			BREAKPOINTS.filter((breakpoint)=>{
		  		return this.media.isActive(breakpoint);
		  	})
		);
		this.updateContainer(this._element, foundChanges);

  	}

  	detectChange(breakpoints): string{
		if(Object.prototype.toString.call( breakpoints ) === '[object Array]'){
			
			if(breakpoints.length === 1){
	  			return breakpoints.shift();
	  		} else {
	  			return null;
	  		}

	  	}else{
  			return null;
  		}
  	}

  updateContainer(element, breakpoint): void{
  	if(!element)
  		throw ReferenceError('No container defined.');

  	this.activeClass = breakpoint;
  }
  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
