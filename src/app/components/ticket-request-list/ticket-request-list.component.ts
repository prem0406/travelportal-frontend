import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { TicketRequest } from 'src/app/models/ticket-request.interface';

@Component({
  selector: 'app-ticket-request-list',
  templateUrl: './ticket-request-list.component.html',
  styleUrls: ['./ticket-request-list.component.css']
})
export class TicketRequestListComponent implements OnInit {

  constructor( private userDataService: UserDataService) { }

  ngOnInit(): void {
  }


  onClick(){
    console.log("Button Clicked...");
    this.userDataService.getTicket(12).subscribe((res: TicketRequest) => {
      console.log("Ticket Get: ", res.user.title);
    })
  }

}
