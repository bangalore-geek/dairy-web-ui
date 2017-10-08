import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  public profile  : any = {
		  userName : 'deepak',
	      email: 'rathordeepak16@gmail.com',
	      firstName : 'Deepak',
	      lastName:'Rathor',
	      address:'None',
	      city:'Bangalore',
	      country : 'India',
	      postal:'560083',
	      aboutMe : 'Photographer by passion ... Developer by profession'
  };

  constructor() { }

  ngOnInit() {
  }

}
