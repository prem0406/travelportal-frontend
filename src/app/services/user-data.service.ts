import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';
import { TicketRequest } from '../models/ticket-request.interface';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  sentData: User; 
  
  constructor(private http: HttpClient) { }

  createUser(user: User){
    return this.http.post(`${API_URL}/users`, user);
  }

  getUserTickets(id: number){
    return this.http.get(`${API_URL}/users/${id}/tickets`);
  }

  createTicketRequest(ticket: TicketRequest, userId: number){
    return this.http.post(`${API_URL}/tickets/${userId}`, ticket);
  }

  

  giveData(user:User):void{
        this.sentData= user;
     }
     getData(){
       return this.sentData;
     }
}
