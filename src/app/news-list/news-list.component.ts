import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {  Http, Response } from '@angular/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnChanges {
	@Input() source: string;

	articles:string [];
	response_value: string;

	constructor(private http: Http) { }
	ngOnChanges(changes: SimpleChanges){
		for(let propName in changes){
			let change = changes[propName];
			let curVal = change.currentValue;
			let preVal = change.previousValue;
			if(curVal){
				this.http.get('https://newsapi.org/v1/articles?source='+curVal+'&apiKey=90dca043b3544edba6305cdaee107528').subscribe(resp=> {
	  			this.response_value = JSON.parse(resp["_body"]);
	  			this.articles = this.response_value["articles"];
  
	  			});
				console.log(curVal);
			}
		
		}
	}
}