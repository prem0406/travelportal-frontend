import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constant';
import { TicketRequest } from '../models/ticket-request.interface';
import { StatusRto } from '../models/status-rto.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketRequestService {
  ticketData: TicketRequest; 

  constructor(private http: HttpClient) { }

  getAllTickets(){
    return this.http.get(`${API_URL}/admin/tickets`);
  }

  getTicket(ticketId: number){
    return this.http.get(`${API_URL}/tickets/${ticketId}`);
  }

  updateTicket(ticket: TicketRequest){
    return this.http.put(`${API_URL}/tickets`,ticket);
  }

  makeStatusInProcess(ticket: TicketRequest, adminId: number){
    return this.http.put(`${API_URL}/admin/${adminId}/tickets/${ticket.ticketRequestId}/inprocess`,ticket);
  }

  changeStatus(statusRto: StatusRto, adminId: number){
    return this.http.put(`${API_URL}/admin/${adminId}/tickets`,statusRto);
  }

  giveTicketData(ticketRequest:TicketRequest):void{
    this.ticketData= ticketRequest;
  }
  
  getTicketData():TicketRequest{
   return  this.ticketData;
  }
}
