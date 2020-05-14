import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { TicketRequest } from 'src/app/models/ticket-request.interface';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  ticketRequests : TicketRequest[];
  id: number;
  searchText: string;
  page: number;
  

  constructor(private userDataService: UserDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userDataService.getUserTickets(this.id).subscribe((res: TicketRequest[]) => {
      this.ticketRequests = res;
    }, error => this.handleErrorResponse(error)
    );
  }


  handleErrorResponse(error:any) {
    console.log('Error getting user tickes ', error);
    this.router.navigate(['error']);
  }

  editTicket(ticket: TicketRequest){
    this.router.navigate(['home',this.id,'ticket',ticket.ticketRequestId]);
  }

  getDetails(ticket: TicketRequest){
    this.router.navigate(['home','ticket',ticket.ticketRequestId]);
  }

}
