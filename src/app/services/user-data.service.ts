import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.interface';
import { TicketRequest } from '../models/ticket-request.interface';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getAllTickets(){
    return this.http.get(`${API_URL}/tickets`);
  }

  getTicket(id: number){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   });
    return this.http.get(`${API_URL}/tickets/${id}`, 
    //{headers}
    );
  }

  createUser(user: User){
    return this.http.post(`${API_URL}/users`, user);
  }

  getUserTickets(id: number){

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   });

    return this.http.get(`${API_URL}/users/${id}/tickets`, 
    //{headers}
    );
  }

  createTicketRequest(ticket: TicketRequest, userId: number){
    return this.http.post(`${API_URL}/tickets/${userId}`, ticket);
  }

   createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
