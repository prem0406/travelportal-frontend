import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  

  constructor(private userDataService: UserDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userDataService.getUserTickets(this.id).subscribe((res: TicketRequest[]) => {
      this.ticketRequests = res;
      console.log(this.ticketRequests)
    }, error => this.handleErrorResponse(error)
    );
  }


  handleErrorResponse(error) {
    
    console.log('Error getting user tickes ', error);
    console.log('Error getting user tickes ', error.error.message);
  }

  editTicket(ticket: TicketRequest){
    console.log("Ticket Selected: ", ticket)
  }

}
