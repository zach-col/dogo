import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	data: Object;

	// store random person api call object
	person: Object;

	// google maps api link
	maplink: String;

	// generate random number for random user
	random: number = Math.floor(Math.random() * 11);


  	constructor(private _http: HttpService) { }

	ngOnInit() {
		this._http.randomUser().subscribe(data => {

	  		this.data = data['results']

	  		this.person = this.data[this.random]


	  		this.maplink = encodeURI(this.data[this.random].user.location.state)
			console.log(this.person)
		});
	}


}
