import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service'

@Component({
  selector: 'app-dogsitters',
  templateUrl: './dogsitters.component.html',
  styleUrls: ['./dogsitters.component.css']
})
export class DogsittersComponent implements OnInit {

	data: string = ''


	people: Object;

  	constructor(private _http: HttpService) { }

	ngOnInit() {
		this._http.getPeople().subscribe(data => {
			this.people = data.results;
			console.log(this.people)
		});
	}


}
