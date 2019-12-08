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
  user: Object;

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

	  		this.user = this.data[params.id]

	  		this.maplink = encodeURI(this.user.user.location.state)

	  		console.log("user",this.user)
	  	});

  	})

  }

}