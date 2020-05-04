import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketRequest } from 'src/app/models/ticket-request.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { TicketRequestService } from 'src/app/services/ticket-request.service';

@Component({
  selector: 'app-newticketrequest',
  templateUrl: './newticketrequest.component.html',
  styleUrls: ['./newticketrequest.component.css']
})
export class NewticketrequestComponent implements OnInit {
  title: string;
  ticketForm: FormGroup;
  ticketRequest: TicketRequest;

  requestTypeControl: FormControl;
  priorityControl: FormControl;
  travelCityControl: FormControl;
  fromCityLocationControl: FormControl;
  travelStartDateControl: FormControl; 
  travelEndDateControl: FormControl; 
  passportNoControl: FormControl; 
  projectNameControl: FormControl; 
  expenseBourneByControl: FormControl;
  travelApproverNameControl: FormControl;
  expectedDurationControl: FormControl; 
  upperBoundControl: FormControl;
  additionalDetailsControl: FormControl; 

  constructor(private route: ActivatedRoute,
    private userDataService: UserDataService, private router : Router,
    private ticketService: TicketRequestService) { }

  //for adding user details along with tickets
  userId: number;

  //this will be used for upadating tickets
  ticketId: number;

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.ticketId = this.route.snapshot.params['ticketId'];

    //update page title according to create/update ticket 
    if(this.ticketId == -1){
      this.title = 'Ticket Requests';
    } else {
      this.title = 'Ticket Update';

    }
    

    this.requestTypeControl = new FormControl('', [Validators.required]);
    this.priorityControl = new FormControl('', [Validators.required]);
    this.travelCityControl = new FormControl('', [Validators.required]);
    this.fromCityLocationControl = new FormControl('', [Validators.required]);
    this.travelStartDateControl = new FormControl('', [Validators.required]); 
    this.travelEndDateControl = new FormControl('', [Validators.required]);
    this.passportNoControl = new FormControl('', [Validators.required, Validators.maxLength(25)]);
    this.projectNameControl = new FormControl('', [Validators.required, Validators.maxLength(100)]);
    this.expenseBourneByControl = new FormControl('', [Validators.required]);
    this.travelApproverNameControl = new FormControl('',[Validators.maxLength(100)]);
    this.expectedDurationControl = new FormControl('', [Validators.maxLength(100)]);
    this.upperBoundControl = new FormControl('', [Validators.maxLength(500)]);
    this.additionalDetailsControl = new FormControl('', [Validators.required, Validators.maxLength(1000)]);

    this.ticketForm = new FormGroup({
      requestType : this.requestTypeControl,
      priority : this.priorityControl,
      travelCity : this.travelCityControl,
      fromCityLocation : this.fromCityLocationControl,
      travelStartDate : this.travelStartDateControl,
      travelEndDate : this.travelEndDateControl,
      passportNo : this.passportNoControl,
      projectName : this.projectNameControl,
      expenseBourneBy : this.expenseBourneByControl,
      travelApproverName : this.travelApproverNameControl,
      expectedDuration : this.expectedDurationControl,
      upperBound : this.upperBoundControl,
      additionalDetails : this.additionalDetailsControl,
    });

    if(!(this.ticketId == -1)){
      this.ticketService.getTicket(this.ticketId).subscribe((data:TicketRequest) =>{
        this.updateModel(data);
      }, error => console.log('Error Getting Ticket: ', error)
      );
      
    }
  }

  onFormSubmit(){

    //for updating a Ticket
    this.ticketRequest = this.ticketForm.value;
    if(!(this.ticketId == -1)){
      this.ticketRequest.ticketRequestId = this.ticketId;

      this.ticketService.updateTicket(this.ticketRequest)
      .subscribe(() => this.handleSuccess(), 
      error => this.handleErrorResponse(error));

    } else {
      //creating New Ticket
      this.userDataService.createTicketRequest(this.ticketRequest, this.userId).subscribe(() => this.handleSuccess(), 
      error => this.handleErrorResponse(error));
    }

  }

  handleSuccess(){
    console.log('ticket uploaded')
    //this.router.navigate(['home',this.userId]);
    this.ticketService.giveTicketData(this.ticketRequest);
    this.router.navigate(['home',this.userId,'ticketconfirmation']);
  }

  handleErrorResponse(error: any) {
    
    console.log('Error Uploding tickets ', error);
  }

  updateModel(ticket: TicketRequest){
    this.ticketForm.patchValue(
     {
      requestType : ticket.requestType,
      priority : ticket.priority,
      travelCity : ticket.travelCity,
      fromCityLocation : ticket.fromCityLocation,
      travelStartDate : this.formatDate(new Date(ticket.travelStartDate)),
      travelEndDate : this.formatDate(new Date(ticket.travelEndDate)),
      passportNo : ticket.passportNo,
      projectName : ticket.projectName,
      expenseBourneBy : ticket.expenseBourneBy,
      travelApproverName : ticket.travelApproverName,
      expectedDuration : ticket.expectedDuration,
      upperBound : ticket.upperBound,
      additionalDetails : ticket.additionalDetails
     }
    );
  }

  private formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

}
