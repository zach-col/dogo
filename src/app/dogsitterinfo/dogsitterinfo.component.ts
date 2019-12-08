import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dogsitterinfo',
  templateUrl: './dogsitterinfo.component.html',
  styleUrls: ['./dogsitterinfo.component.css']
})
export class DogsitterinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  user: Object;

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.user = params;
  	})
  }

}
