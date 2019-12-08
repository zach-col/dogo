import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient ) { }

  getPeople() {
  	return this.http.get('https://randomuser.me/api/0.4/?page=3&results=10&seed=abc')
  }

  getUser() {
  	return this.http.get('https://randomuser.me/api/0.4/?page=3&results=10&seed=abc')
  }

  randomUser() {
  	return this.http.get('https://randomuser.me/api/0.4/?page=3&results=10&seed=abc')
  }
}
