import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient ) { }

  getPeople() {
  	return this.http.get('https://api.randomuser.me/0.4/?results=3')
  }

}
