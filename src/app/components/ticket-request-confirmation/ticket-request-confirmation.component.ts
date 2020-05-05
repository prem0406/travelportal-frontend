import { Component, OnInit } from '@angular/core';
import { TicketRequestService } from 'src/app/services/ticket-request.service';
import { TicketRequest } from 'src/app/models/ticket-request.interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ticket-request-confirmation',
  templateUrl: './ticket-request-confirmation.component.html',
  styleUrls: ['./ticket-request-confirmation.component.css']
})
export class TicketRequestConfirmationComponent implements OnInit {
   userId:number;
   ticketRequest: TicketRequest
  constructor(private ticketService : TicketRequestService,private router : Router,
    private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.ticketRequest= this.ticketService.getTicketData();
  }
  printPage() {
    window.print();
  }
 
  homepage(){
    this.router.navigate(['home',this.userId]);
  }
 
}