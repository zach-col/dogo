import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService} from '../http.service'

@Component({
  selector: 'app-dogsitterinfo',
  templateUrl: './dogsitterinfo.component.html',
  styleUrls: ['./dogsitterinfo.component.css']
})
export class DogsitterinfoComponent implements OnInit {
  // user object
  person: Object;

  test: Object;

  // getting data back from random user api
  data: Object;

  // data for google maps api
  maplink: string = ''

  constructor(private route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {

  	this.route.params.subscribe(params => {
  	this.test = params;
  	console.log(params.id)
	  	this._http.getUser().subscribe(data => {
	  		this.data = data['results']

	  		this.person = this.data[params.id]

	  		this.maplink = encodeURI(this.data[params.id].user.location.state)

	  		console.log("user",this.person)
	  	});

  	})

  }

}