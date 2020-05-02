import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constant';
import { TicketRequest } from '../models/ticket-request.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketRequestService {

  constructor(private http: HttpClient) { }

  getAllTickets(){
    return this.http.get(`${API_URL}/tickets`);
  }

  getTicket(ticketId: number){
    return this.http.get(`${API_URL}/tickets/${ticketId}`);
  }

  updateTicket(ticket: TicketRequest){
    return this.http.put(`${API_URL}/tickets`,ticket);
  }
}
