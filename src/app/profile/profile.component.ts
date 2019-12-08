import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	data: string = ''


	person: Object;
  	constructor(private _http: HttpService) { }

	ngOnInit() {
		this._http.randomUser().subscribe(data => {
			this.person = data.results[Math.floor(Math.random() * 11)];
			
			console.log(this.person)
		});
	}


}
