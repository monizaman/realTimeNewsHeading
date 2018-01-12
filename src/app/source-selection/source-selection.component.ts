import { Component, OnInit } from '@angular/core';
import {  Http, Response } from '@angular/http';

@Component({
  selector: 'app-source-selection',
  templateUrl: './source-selection.component.html',
  styleUrls: ['./source-selection.component.css']
})
export class SourceSelectionComponent implements OnInit {
	//90dca043b3544edba6305cdaee107528
	sources :string [];
	source :string = '';
	source_id :string = '';
	response_value = '';
  constructor(private http: Http) { }

  ngOnInit() {
  	this.http.get('https://newsapi.org/v1/sources?language=en').subscribe(resp=> {
  		this.response_value = JSON.parse(resp["_body"]);
  		this.sources = this.response_value["sources"];
  	});
  }
  onChange(val){
  	for(var i = 0; i<this.sources.length;i++){
  		if(this.sources[i]["id"] == val){
  			this.source = this.sources[i];
  			this.source_id = val;
  		}
  		
  	}
  }

}
