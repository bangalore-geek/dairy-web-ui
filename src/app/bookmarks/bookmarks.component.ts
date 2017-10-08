import { Component, OnInit } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent implements OnInit {

  bookmark : any = {};
  bookmarks: any = [];
  showForm : boolean = false;

  constructor(private http:Http) { }
  
  ngOnInit() { 
	  this.loadData();
  }
  
  loadData() {
	  this.http.get('/api/bookmark')
	  	.map(response => response.json())
	  		.subscribe(data => {
	  			this.bookmarks = data.bookmark;
	  			});
  }
  
  saveBookmark() {
	 let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
	 this.http.post('/api/bookmark', this.bookmark , options).subscribe(
	        res => {
	        	this.showNotification('Bookmark saved successfully.',0)
	        	this.bookmark = {};
	        	this.loadData();
	        	this.showForm = false;
	        },
	        err => {
	        	this.showNotification('Error while saving bookmark.',1)
	        }
	      );	 
    }
	 
   editBookmark(bookmark) {
		 this.bookmark = bookmark;
		 this.showForm = true;
    }
   
   deleteBookmark(bookmark) {
	   let headers = new Headers({ 'Content-Type': 'application/json' });
	     let options = new RequestOptions({ headers: headers });
		 this.http.delete('/api/bookmark/'+bookmark.id , options).subscribe(
	        res => {
	        	this.showNotification('Bookmark removed successfully.',0)
	        	this.loadData();
	        },
	        err => {
	        	this.showNotification('Error while deleting bookmark.',1)
	        }
	      );
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
  
}
