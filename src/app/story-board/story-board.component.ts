import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Component({
  selector: 'story-board',
  templateUrl: './story-board.component.html'
})
export class StoryBoardComponent implements OnInit {

  stories : any = [];	
  story : any = {};
  showForm : boolean = false;
	
  constructor(private http:Http) { }
  
  ngOnInit() { 
	  this.loadData();
  }
  
  loadData() {
	  this.http.get('/api/story')
	  	.map(response => response.json())
	  		.subscribe(data => {
	  			this.stories = data.stories;
	  			});
  }
 
 saveStory() {
	 
	 let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
	 this.http.post('/api/story', this.story , options).subscribe(
	        res => {
	        	this.showNotification('Story saved successfully.',0)
	        	this.story = {};
	        	this.loadData();
	        	this.showForm = false;
	        },
	        err => {
	        	this.showNotification('Error while saving story.',1)
	        }
	      );	 
  }
 
 editStory(story) {
	 this.story = story;
	 this.showForm = true;
 }
  
  extractData(res: Response) {
		let body = res.json();
	        return body.data || {};
	    }
  
  showNotification(msg, index) {
      const type = ['success','danger'];
      $.notify({
          icon: "notifications",
          message: msg

      },{
          type: type[index],
          timer: 4000,
          placement: {
              from: 'top',
              align: 'right'
          }
      });
  }
  
   getColor() {
      
      return ;
  }
  
}
