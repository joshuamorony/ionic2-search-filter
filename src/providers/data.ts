import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

	items: any;

	constructor(public http: Http) {

		this.items = [
			{title: 'one'},
			{title: 'two'},
			{title: 'three'},
			{title: 'four'},
			{title: 'five'},
			{title: 'six'}
		]

	}

	filterItems(searchTerm){

	    return this.items.filter((item) => {
	    	return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
	    });		

	}

}