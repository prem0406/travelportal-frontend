import { Component, OnInit } from '@angular/core';
import { TicketRequest } from 'src/app/models/ticket-request.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketRequestService } from 'src/app/services/ticket-request.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  ticketRequests : TicketRequest[];
  adminId: number;
  

  constructor(private ticketService: TicketRequestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //this.adminId = this.route.snapshot.params['adminId'];
    this.ticketService.getAllTickets().subscribe((res: TicketRequest[]) => {
      this.ticketRequests = res;
    }, error => this.handleErrorResponse(error)
    );
  }


  handleErrorResponse(error:any) {
    
    console.log('Error getting user tickest ',error);
    // console.log(error.status == 403);
    if(error.status == 403){
      this.router.navigate(['error']);
    }
  }

  editTicket(ticket: TicketRequest){
    
    this.router.navigate(['admin',35,'tickets',ticket.ticketRequestId]);
    
  }

}
