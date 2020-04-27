import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getAllTickets(){
    return this.http.get('http://localhost:8080/tickets');
  }

  getTicket(id: number){
    return this.http.get(`http://localhost:8080/tickets/${id}`);
  }

  createUser(user: User){
    return this.http.post("http://localhost:8080/users", user);
  }
}
